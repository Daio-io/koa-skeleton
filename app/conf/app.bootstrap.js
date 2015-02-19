var hbs = require('koa-handlebars');

module.exports = function (app) {

    app.use(hbs(
        {
            layoutsDir: 'app/layouts',
            viewsDir: 'app/layouts/views',
            partialsDir: 'app/layouts/partials',
            defaultLayout: 'main',
            // just setting this while developing
            cache: false
        }
    ));

};