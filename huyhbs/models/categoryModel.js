const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const categorySchema = new Schema({
    id: { type: ObjectId },
    categoryName: { type: String }
})

module.exports = mongoose.model('category', categorySchema);