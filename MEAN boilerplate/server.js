const express      = require('express');
const path         = require('path');
const mongoose     = require('./db/mongoose');
const cookieParser = require('cookie-parser');
const morgan       = require('morgan');
const favicon      = require('serve-favicon');
const cors         = require('cors');

// ROUTES
const routes = require('./routes/index');
const user = require('./routes/api/users');

const app = express();

// bodyparser
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(cors());
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// static file config
app.use(express.static(path.join(__dirname, 'public')));

// routes

// @route GET /
// @desc Loads index page
app.use('/', routes);
app.use('/api/users', user);

app.use(function (req, res){
    res.status(400).send("Oops somehting wrong in url");
});

const port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`--connection open--`);
    console.log(`server running on ${port}`);
});
