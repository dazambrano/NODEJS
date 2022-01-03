const mongoose = require('../db/db');
const Schema = mongoose.Schema;

const schemas = {
    commentSchema: new Schema({
        name: {
            type: String
        },
        email: {
            type: String
        },
        text: {
            type: String
        },
        date: {
            type: Date
        }
    })
};

module.exports = mongoose.model('comments', schemas.commentSchema);