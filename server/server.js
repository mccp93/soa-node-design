var express = require('express');
var app = express();
var apiRouter = require('./api/api');
var err = require('./middleware/err');
// IIFE for the init of middleware.
require('./middleware/appMiddleware')(app);

// Router setup.
app.use('/api/', apiRouter);
app.use(err());

// set up global error handling

// export the app for testing
app.listen(3000);
