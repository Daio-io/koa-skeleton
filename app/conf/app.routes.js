var homeRoutes = require('../home/home.router');
var aboutRoutes = require('../about/about.router');

module.exports = function (app) {

    app.use(homeRoutes.routes());
    app.use(aboutRoutes.routes());


};

