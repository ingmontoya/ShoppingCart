const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    productname: {type: String, required: true, max: 128},
    productprice: {type: String, required: true, max: 32},
    productdescription: {type: String, required: true, max: 128},
    productimage: {type: String, required: true, max: 128},
    productcategory:{
        categoryname:{type: String, required:true, max:128}
    }
}, {collection:'product'});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
