var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerFile = require('./swagger/swagger-output.json');
const swaggerUi = require('swagger-ui-express');

const testRoutes = require('./routes/testRoutes');
const postRoutes = require('./routes/postRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, '/../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../../frontend/build')));

// Swagger setting
// app.use("/api-docs", 
//   swaggerUi.serve, 
//   swaggerUi.setup(specs)
// );

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', indexRouter);
// app.use('/test', testRoutes);
app.use('/blog', postRoutes);
app.use('/gallery', galleryRoutes);
app.use("/api-docs", 
  swaggerUi.serve, swaggerUi.setup(swaggerFile)
);

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