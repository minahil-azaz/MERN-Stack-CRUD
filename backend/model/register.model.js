const mongo = require('mongoose');

const { Schema } = mongo;

const registerSchema = new Schema({
    profile: String,
    name: String,
    email: {
        type: String,
        required: true
    },
    mobile: String,
    gender: String,
    dob: String,
    address: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongo.model('register',registerSchema)