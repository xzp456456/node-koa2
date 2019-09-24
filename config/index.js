module.exports= {
    DB_URL :"mongodb://localhost:27017/app",
    secret :"abc",
    jwtNoCheck:[
        '/admin/index',
        '/admin/AccountLogin',
        '/admin/login',
        '/api/navBar',
        '/api/recommend',
        '/api/version',
        '/api/agree',
        '/api/login',
        '/api/timeRecom',
        '/api/register',
        '/api/seller',
        '/api/hot',
        '/user/changPassword'
    ]
}