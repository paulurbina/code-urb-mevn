const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// Connect Database
mongoose.connect('mongodb://paul-admi:paul-admi-94@ds235411.mlab.com:35411/dataform-code-urb-db')
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);


// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/dataform', require('./routes/dataform'));

// Static files
app.use(express.static(__dirname + '/public'));

// Server is listenin
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});