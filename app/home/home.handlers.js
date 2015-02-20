exports.getHome = function *() {

    yield this.render("home", {

        title: 'Koa Skeleton',
        welcomeMessage: 'Home page'

    });

};