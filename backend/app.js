
var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var logger = require('morgan');
var app = express();
var port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;

    //   render the error page
    res.status(err.status || 500);
    res.json({ error: err });

});

mongoose.connect('mongodb://localhost:27017/todoDB', { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully Connected!');
    }, error => {
        console.log('Unable to connect \n' + error);
    });

require('./routes')(app);

app.listen(port, function () {
    console.log('Express server listening on port! production ' + port);
});

module.exports = app;
