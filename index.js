var koa = require('koa');
var app = koa();
var serve = require('koa-static');

app.use(serve(__dirname + '/public', {maxage: 0}));

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);

app.listen(3000, function () {
    console.log('Started.. ');
});