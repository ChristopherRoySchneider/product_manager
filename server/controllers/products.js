var mongoose = require('mongoose')
var Product = mongoose.model('Product') // We are retrieving this Schema from our Models, named 'tenrec'
var Rating = mongoose.model('Rating')
module.exports = {
    find_all: function (req, res) {
        Product.find({}, function (err, product) {
            if (err) {
                console.log('something went wrong');
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('got all products:', product);
                res.json({ message: "Success", data: product })
            }
        }).sort('-_id')
    },
    new: function (req, res) {
        // console.log(req)
        var newProduct = new Product();
        newProduct.title = req.body.title;
        newProduct.imageUrl= req.body.imageUrl;
        newProduct.price= req.body.price;
        
        newProduct.save(function (err) {
            if (err) {
                console.log('error saving new user: ',err);
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('new product:', newProduct);
                res.json({ message: "Success", data: newProduct })
            }
            
        })
    },
    get_by_id: function (req, res) {
        Product.find({_id:req.params.productid}, function (err, p_by_name) {
            if (err) {
                console.log('something went wrong');
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('got products by name:', p_by_name);
                res.json({ message: "Success", data: p_by_name })
            }
        })
    },
    edit: function (req, res) {
        // console.log("POST DATA", req.body);
        Product.findOne({ _id: req.params.productid }, function (err, product) {
            product.title = req.body.title;
            product.imageUrl= req.body.imageUrl;
            product.price= req.body.price;
            
          
            
            product.save(function (err) {
                if (err) {
                    console.log('Post Errors:', err.errors);
                    res.json({ message: "Error", error: err })
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a product!');
                    res.json({ message: "Success",  })
                }
            })
        })
    },


    remove: function (req, res) {
        Product.deleteOne({_id:req.params.productid}, function (err) {
            if (err) {
                console.log('something went wrong');
                res.json({ message: "Error", error: err })
            } else { // else console.log that we did well and then redirect to the root route
                console.log('!!!!!!!!!!!!!!!deleted product by id:',req.params.productid );
                res.json({ message: "Success" })
            }
        })
    },
    


}