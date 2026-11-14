var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/rotasIndex');
var rotasOficina = require('./routes/rotasOficina');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/oficina', rotasOficina);

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
  // erro 404 (rota ou oficina inexistente) usa a página 404; os demais, a página de erro
  if (err.status === 404) {
    res.render('404', { titulo_pagina: 'Página não encontrada', registro: err.registro,  mensagem: err.message, });
  } else {
    res.render('error');
  }
});

module.exports = app;
