var mongoose = require('mongoose')

var products = require('../controllers/products.js')
module.exports = function (app) {
    app.get('/products', function (req, res) {
        products.find_all(req, res);
    })
    app.get('/products/:productid', function (req, res) {
        products.get_by_id(req, res);
    })
    app.post('/products', function (req, res) {
        products.new(req, res);
    })
    app.put('/products/:productid', function (req, res) {
        products.edit(req, res);
    })

    app.delete('/products/:productid', function (req, res) {
        products.remove(req, res);
    })

  

    

}