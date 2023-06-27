var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
require('./config/database');
var methodOverride = require('method-override');

var indexRouter = require('./routes/index');
var exercisesRouter = require('./routes/exercises');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method')); 
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Additional Middleware to allow paths to images. 
//This one will not work because it is an absolute path
// app.use(express.static('/public/images'));
// Therefore this is used instead: it is a relative path to correctly locate static files
app.use('/public/images/', express.static('./public/images'))

app.use('/', indexRouter);
app.use('/exercises', exercisesRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
