
exports.getHome = function *(next){

    this.body = "Home";
    yield next;

};