const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path');
const router = require('./routers');
var methodOverride = require('method-override')

const db = require('./config/db');

const app = express();
const port = 3000;

//connect db
db.connect();

// static file
app.use(express.static(path.join(__dirname,'public')));

//body-parsers
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(methodOverride('_method'));
// template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers:{
    sum : (a,b) => a +b,
  }
  
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

// HTTP logger
// app.use(morgan('combined'));

router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})