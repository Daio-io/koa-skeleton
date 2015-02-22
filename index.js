var koa = require('koa');
var app = koa();
var serve = require('koa-static');

app.use(serve(__dirname + '/public', {maxage: 0}));

require('./app/conf/app.bootstrap')(app);
require('./app/conf/app.routes')(app);

var port = process.env.PORT || 3000 ;

app.listen(port, function () {
    console.log('Started.. ');
});