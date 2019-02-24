if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const expvalidator = require('express-validator');
const bodyParser = require('body-parser');
//Verify if it is production or development

const app = express();


// Connect Database
// mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGOMLAB_URI, {
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 8090);  

// middlewares
app.use(expvalidator());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/',require('./routes/user'));

// Static files
app.use(express.static(path.join(__dirname, '/public')));



// Server is listenin
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
}); 