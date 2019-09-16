const Koa = require("koa");
const app = new Koa();
const render = require("koa-ejs");
const path = require("path");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const koajwt = require('koa-jwt')
const { secret } = require('./config/index')
// error handler
onerror(app);

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

render(app, {
  root: path.join(__dirname, "views"),
  layout: "layout",
  viewExt: "html"
});
// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use((ctx, next)=>{
  return next().catch((err) => {
      if (401 == err.status) {
          ctx.status = 401;
          ctx.body = 'Protected resource, use Authorization header to get access\n';
      } else {
          throw err;
      }
  });
});
app.use(koajwt({
  secret: secret
}).unless({
  path: [/^\/login/,/^\/register/]
}));
require("./mongodb/db");
require("./routes/index")(app);

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
