const Product = require('../models/product.model');


// create user
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            productname: req.body.productName,
            productprice: req.body.ProductPrice,
            productdescription: req.body.productDescription,
            productimage: req.body.productImage,
            incart:"false",
            productcategory:{
                categoryname:req.body.categoryname
            }
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product created successfully')
    })
};

// controllers/products.controller.js
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        // eslint-disable-next-line 
        if (err) return next(err);
        res.send(product);
    })
};
// update product incart
exports.update_product_cart = function (req, res, next) {
    Product.findById(req.params.id, req.params.action,function (err, product) {
        if(!product)
            res.status(404).send("data is not found");
        else
            product.incart=req.params.action
        
            product.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.send('Product created successfully')
            })
 
        
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
// get products by category
exports.get_products_category = function (req, res) {
    Product.find({productcategory:{categoryname:req.params.categoryname}},function (err, product) { 
        // eslint-disable-next-line 
        if (err) return next(err);
            res.send(product);
    })
};

// get products by category
exports.get_products_incart = function (req, res) {
    Product.find({incart:req.params.incart},function (err, product) { 
        // eslint-disable-next-line 
        if (err) {console.log(err);return next(err)};
            res.send(product);
    })
};