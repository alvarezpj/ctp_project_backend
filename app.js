const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// import routers
const eventCategoriesRouter = require('./routers/eventCategories');
const eventsRouter = require('./routers/events');
const usersRouter = require('./routers/users');


const app = express();
const PORT = 8000;

// log method, URL, status, and response time
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// mount routers
app.use('/category', eventCategoriesRouter);
app.use('/event', eventsRouter);
app.use('/user', usersRouter);

// catch-all route
app.get('*', (req, res, next) => {
    res.status(200).json({ message: 'Serving requests' });
});

// start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
