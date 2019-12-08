/* eslint-disable linebreak-style */
const todoRoutes = require('../routes/todo-routes');

module.exports = (app) => {
    app.use(todoRoutes);
};