const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 8000;

// log method, URL, status, and response time
app.use(morgan('dev'));




app.get('*', (req, res, next) => {
    res.status(200).json({ message: 'Serving requests' });
});

// start server
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
