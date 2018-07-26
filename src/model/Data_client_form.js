const mongoose = require('mongoose');
const { Schema } = mongoose;

const Data_client_form = new Schema({
    company: String,
    nameLastname: String,
    phone: Number,
    email: String,
    observationComments: String
});

module.exports = mongoose.model('Data_client_form', Data_client_form);