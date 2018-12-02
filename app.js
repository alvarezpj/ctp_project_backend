const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// import routers
const eventCategoriesRouter = require('./routers/eventCategories');
const eventsRouter = require('./routers/events');
const usersRouter = require('./routers/users');
const newYorkCityNeighborhoodsRouter = require('./routers/newYorkCityNeighborhoods');


const app = express();
const PORT = 8000;

// log method, URL, status, and response time
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* mount routers */
// mount event categories router
app.use('/category', eventCategoriesRouter);
// mount events router
app.use('/event', eventsRouter);
// mount users router
app.use('/user', usersRouter);
// mount new york city neighborhoods router
app.use('/neighborhood', newYorkCityNeighborhoodsRouter);

// catch-all route
app.get('*', (req, res, next) => {
    res.status(200).json({ message: 'Serving requests' });
});

// start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
