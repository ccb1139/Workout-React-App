const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let groceryCategorySchema = new Schema({
    foodCategoryName: {
        type: String
    },
    foods: {
        type: Array
    },

}, {
    collection: 'groceries'
})

module.exports = mongoose.model('GroceryCategory', groceryCategorySchema)