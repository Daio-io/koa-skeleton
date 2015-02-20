exports.getAbout = function *() {

    yield this.render("about", {

        title: 'Koa Skeleton - About',
        aboutMessage: 'About me page'

    });

};