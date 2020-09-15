const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        default: 'n/a'
    },
    data: {
        type: String,
        default: ''
    },
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps: true});

const News = mongoose.model('News', newsSchema);

module.exports = {News};