const Product = require('../models/product.model');


// create user
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            productname: req.body.productName,
            productprice: req.body.ProductPrice,
            productdescription: req.body.productDescription,
            productimage: "/product/images/"+req.body.productName+"-"+req.body.productImage,
            productcategory:{
                categoryname:req.body.categoryname
            }
        }
    );

    product.save(function (err) {
        if (err) {
            // eslint-disable-next-line 
            return next(err);
        }
        res.send('Product created successfully')
    })
};

// controllers/products.controller.js
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        // eslint-disable-next-line 
        if (err) return next(err);
        res.send(product);
    })
};

// get all products
exports.get_products = function (req, res) {
    Product.find(function (err, product) {
        // eslint-disable-next-line 
        if (err) return next(err);
            res.send(product);
    })
};