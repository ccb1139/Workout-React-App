const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let fridgeSchema = new Schema({
    foodName: {
        type: String
    },
    expirationDate: {
        type: String
    },
    foodCategoryName: {
        type: String
    }

}, {
    collection: 'foods'
})

module.exports = mongoose.model('Fridge', fridgeSchema)