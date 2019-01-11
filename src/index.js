const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect Database
//MLAB
//mongodb://data-users:tQLwtolZ6pRXfpp5@ds249824.mlab.com:49824/data-users
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/user-db', {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);  

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/',require('./routes/user'));

// Static files
app.use(express.static(path.join(__dirname, '/public')));

// Server is listenin
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});