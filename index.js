var koa = require('koa');
var app = koa();

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);

app.listen(3000, function () {
    console.log('Started.. ');
});