const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo =  new Schema({

    content: {type: String}, completed: {type: Boolean}
}, {collection: 'todos'});

module.exports = mongoose.model('Todo', Todo)