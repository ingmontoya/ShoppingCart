const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    productname: {type: String, max: 128},
    productprice: {type: String, max: 32},
    productdescription: {type: String, max: 128},
    productimage: {type: String,  max: 128, default: "/product/images/new-product.gif"},
    productcategory:{
        categoryname:{type: String, max:128}
    }
}, {collection:'product'});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
