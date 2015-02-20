var aboutHandlers = require('./about.handlers');
var router = require('koa-router')();

router.get('/about', aboutHandlers.getAbout);

module.exports = router;