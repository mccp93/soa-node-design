var express = require('express');
var app = express();
var apiRouter = require('./api/api');
var auth = require('./auth/routes');
var err = require('./middleware/err');
var config = require('./config/config');
var logger = require('./util/logger');


require('mongoose').connect("mongodb://localhost/nodeblog")
// IIFE for the init of middleware.
require('./middleware/appMiddleware')(app);

if(config.seed){
    require('./util/seed');
}

// Router setup.
app.use('/api', apiRouter);
app.use('/auth', auth);

app.use(function(err, req, res, next){
    if(err.name === 'UnauthorizedError'){
        return res.status(401).send('Invalid token.');
    }

    logger.error(err.stack);
    res.status(500).send('Oops');
});

// set up global error handling
module.exports = app;