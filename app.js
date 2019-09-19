const Koa = require("koa");
const app = new Koa();
const render = require("koa-ejs");
const path = require("path");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const koajwt = require("koa-jwt");
const session = require('koa-session');
const { secret } = require("./config/index");
const koaBody = require('koa-body');
// error handler
onerror(app);
app.use(koaBody({
  multipart: true,
  formidable: {
      maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
  }
}));
app.keys = ['some secret hurr'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: false, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
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
app.use((ctx, next) => {
  return next().catch(err => {
    if (401 == err.status) {
      ctx.status = 401;
      ctx.body = {
        status: -10086,
        msg: "未登录"
      };
    } else {
      throw err;
    }
  });
});
app.use(
  koajwt({
    secret: secret
  }).unless({
    path: [/^\/login/, /^\/register/, /^\//, /\admin\/index/]
  })
);

require("./routes/api/index")(app);
require("./routes/admin/index")(app);

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
