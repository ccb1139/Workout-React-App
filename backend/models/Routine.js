const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let routineSchema = new Schema({
    foodName: {
        type: String
    },
    expirationDate: {
        type: Array
    },

}, {
    collection: 'routines'
})

module.exports = mongoose.model('Routine', routineSchema)