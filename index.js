var koa = require('koa');
var app = koa();
var homeRoutes = require('./app/home/home.router');

app.use(homeRoutes.routes());

app.listen(3000, function () {
    console.log('Started.. ');
});