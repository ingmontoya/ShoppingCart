const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User_AccountSchema = new Schema({
    user_name: {type: String, required: true, max: 128},
    password: {type: String, required: true, max: 32},
    email: {type: String, required: true, max: 128},
    first_name: {type: String, required: true, max: 128},
    last_name: {type: String, required: true, max: 128},
}, {collection:'user_account'});


// Export the model
module.exports = mongoose.model('User_Account', User_AccountSchema);
