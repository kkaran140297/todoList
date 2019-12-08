const mongoose = require('mongoose');

const DB = () => {
    const todoSchema = new mongoose.Schema({
        todo: {type: String},
        date: {type: Date}
    });

    const mydriver = mongoose.connection.useDb('todoDB');
    return mydriver.model('todoSchema', todoSchema, 'todoSchema');
}

module.exports = DB;