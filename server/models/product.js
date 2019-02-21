var validator = require('validator')
var uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose')
module.exports = function () {
    
    var RatingSchema = new mongoose.Schema({
        stars: { type: Number, required:true, },
        
        comment: { type: String, required:true, },

    })
    

    var ProductSchema = new mongoose.Schema({
        title: { type: String, required:[true,"Name Is Required"], minlength:[4,"Minimum Length 4"] },
        price: { type: Number, required:[true,"Price Is Required"] },
        imageUrl: { type: String, required:[true,"Image URL Is Required"], minlength:[3,"Minimum Length 3"] },
        ratings:[RatingSchema],

    })

    mongoose.model('Product', ProductSchema);


    
}