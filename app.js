var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var webRouter = require('./routes/web');
var apiRouter = require('./routes/api');
var directory = require('./config/path');
var database = require('./config/database');
var config = require('./config/app');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require(`./app/http/${directory.modules}/i18n`));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', webRouter);
app.use('/api', apiRouter);

// development mode
if (config.env == 'local') {
    var testModule = require(`./${directory.tests}/${directory.modules}/module`);

    app.use(testModule);
    app.use(require(`./${directory.tests}/${directory.router}`));
}

// mongoose connection
if (database.default == 'mongoose') {
    var connectDB = require('./config/mongoose');

    connectDB.connect();
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = config.env === 'local' ? err : {};

    if (config.debug) {
        console.log('Warning you running this with debug mode');
    }

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
