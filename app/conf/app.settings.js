module.exports = {

    port: process.env.PORT || 3000,

    templateCache: (process.env.IO_ENV === 'live'),

    publicCache: (process.env.IO_ENV === 'live') ? 0 : 86400000

};