exports.getHome = function *(next) {

    yield this.render("home", {

        title: 'Koa Skeleton',
        welcomeMessage: 'Home page'

    });

};