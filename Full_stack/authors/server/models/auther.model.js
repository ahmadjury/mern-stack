const mongoose = require('mongoose');
 
const AutherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name is required"],
        minlength: [3,"the name must be more than 3 charechtors"]
    } 
});
 
module.exports =  mongoose.model('User', AutherSchema);