var router = require('express').Router();
var { I18n } = require('i18n');
var path = require('path');

// Get Config File
var config = require('../../../config/app');
var directory = require('../../../config/path');

// I18N Configuration
var i18n = new I18n({
    // setup some locales - other locales default to en silently
    locales: ['en', 'id'],

    // you may alter a site wide default locale
    defaultLocale: config.locale,

    // will return translation from defaultLocale in case current locale doesn't provide it
    retryInDefaultLocale: true,

    // sets a custom header name to read the language preference from - accept-language header by default
    header: 'accept-language',

    // where to store json files - defaults to './locales' relative to modules directory
    directory: path.join(__dirname, `../../../${directory.translate}`),

    // watch for changes in JSON files to reload locale on updates - defaults to false
    autoReload: true,

    // whether to write new locale information to disk - defaults to true
    updateFiles: false,

    // sync locale information across all files - defaults to false
    syncFiles: true,

    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.json',

    // use tree system of json files - defaults to false
    objectNotation: true,

    // setting of log level DEBUG - default to require('debug')('i18n:debug')
    logDebugFn: function (msg) {
        console.log(`SERVER ${msg} - - ms - -`);
    },

    // setting of log level WARN - default to require('debug')('i18n:warn')
    logWarnFn: function (msg) {
        console.log(`SERVER ${msg} - - ms - -`);
    },

    // setting of log level ERROR - default to require('debug')('i18n:error')
    logErrorFn: function (msg) {
        console.log(`SERVER ${msg} - - ms - -`);
    },

    // used to alter the behaviour of missing keys
    missingKeyFn: function (locale, value) {
        console.log(`SERVER missing translate key ${value}, in locale ${locale} - - ms - -`);

        return value;
    },
});

// Middleware for translate init
router.use((permintaan, respon, next) => {
    i18n.init(permintaan, respon);

    console.log(`SERVER get translate data from ${i18n.getLocale()} locale - - ms - -`);

    next();
});

module.exports = router;
