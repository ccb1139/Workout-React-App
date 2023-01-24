const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let routineSchema = new Schema({
    title: {
        type: String
    },
    activities: {
        type: Array
    },

}, {
    collection: 'routines'
})

module.exports = mongoose.model('Routine', routineSchema)