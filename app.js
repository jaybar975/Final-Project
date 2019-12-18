const PORT = 8082;
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// var fetch = require('node-fetch');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * Locates the files in public
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Template Engine: 
 */
app.set('views',path.join(__dirname, "views") );
const hbs = require('express-handlebars')({
  defaultLayout: 'main',
  extname: '.hbs'
});
app.engine('hbs', hbs);
app.set('view engine', 'hbs');


/**
 * This imports the files from the routes folder
 */

var indexRouter = require('./routes/index');
var resumeRouter = require('./routes/resume');
var starwarsRouter = require('./routes/starwars');
var pokemonRouter = require('./routes/pokemon');
var rickRouter = require('./routes/rick');
app.use('/', indexRouter);
app.use('/resume', resumeRouter);
app.use('/starwars', starwarsRouter);
app.use('/pokemon', pokemonRouter);
app.use('/rick', rickRouter);


// app.get('/:id', async (req, res) => {
//   try {
//       const URI = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
//       const pokemonData = await fetch(URI);
//       const json = await pokemonData.json();
//       // console.log(json);
//       const pokeName = await json.name;
//       const pokeImg = await json.sprites.back_default;
//       // console.log(pokeImg);
  
//       await res.render('index', {
//           name: pokeName,
//           img: pokeImg
//       });
//   } catch (error) {
//       console.log(error);
//   }
       
// });


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


app.listen(process.env.PORT||PORT, () => {
  console.log(`Server started on ${PORT}`);
});



module.exports = app;
