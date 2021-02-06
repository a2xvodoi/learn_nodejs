const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const path = require('path');
const router = require('./routers');

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

// template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'));

// HTTP logger
// app.use(morgan('combined'));

router(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})