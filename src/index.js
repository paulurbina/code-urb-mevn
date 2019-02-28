if (process.env.NODE_ENV !== 'production') {
    //Verify if it is production or development 
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const expvalidator = require('express-validator');

const bodyParser = require('body-parser'),
    DEFAULT_BODY_SIZE_LIMIT = 1024*1024*10,
    DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
    parameterLimit: DEFAULT_PARAMETER_LIMIT,
    limit: DEFAULT_BODY_SIZE_LIMIT
});

// Inititializations
const app = express();

// Connect Database
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.MONGOMLAB_URI, {
    useNewUrlParser: true,
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);  

// middlewares
app.use(expvalidator());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json(bodyParserJsonConfig()));
app.use(express.json());

// routes
app.use('/',require('./routes/user'));

// Static files
app.use(express.static(path.join(__dirname, '/public')));
app.use('/swiper', express.static(path.join(__dirname,'../node_modules/swiper/dist/')))

// Server is listenin
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
}); 