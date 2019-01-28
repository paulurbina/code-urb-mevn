const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, minlength: 5, maxlength: 30, required: true },
    email: { type: String, required: () => { return this.name } },
    subject: { type: String, minlength: 5, maxlength: 200, required: () => { return this.email} },  
    message: { type: String, minlength: 10, maxlength: 300, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);