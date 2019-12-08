const todoModel = require('../models/todo');

module.exports = class inventoryController {

    // Creating a new Product for inventory
    static createTodo(requestObject) {
        return new Promise((resolve, reject) => {
            const todo = todoModel();
            const newTodo = new todo({
                todo: requestObject.body.todo,
                date: requestObject.body.date
            });
            newTodo.save().then((data) => {
                resolve({
                    todo: data,
                    message: 'Successfully created'
                }), (error) => {
                    reject({
                        err: error,
                        message: 'Unable add you todo in the list'
                    });
                };
            });
        })
    }

    static retrieveAllTodo() {
        return new Promise((resolve, reject) => {
            const todo = todoModel();
            todo.find({})
                .then((data) => {
                    resolve({
                        todo: data,
                        message: 'The todo list is retrieved'
                    }), (error) => {
                        reject({
                            err: error,
                            message: 'There was an error retrieving the todo list.'
                        })
                    }
                }).catch((error) => {
                    reject({
                        error: error,
                        message: 'There was some error retrieving your request to get all list'
                    })
                })
        })
    }


    static deleteTodo(requestObject) {
        return new Promise((resolve, reject) => {
            const todo = todoModel();
            todo.deleteOne({ _id: requestObject.params.id })
                .then(() => {
                    resolve({
                        message: 'The todo is deleted from the list'
                    }), (error) => {
                        reject({
                            err: error,
                            message: 'There was an error deleting the todo from the list.'
                        })
                    }
                }).catch((error) => {
                    reject({
                        error: error,
                        message: 'There was some error.'
                    })
                })
        })
    }

    static editTodo(requestObject) {
        return new Promise((resolve, reject) => {
            const todo = todoModel();
            todo.findOneAndUpdate({ _id: requestObject.params.id },
                {
                    $set: {
                        todo: requestObject.body.todo,
                        date: requestObject.body.date
                    }
                }, { useFindAndModify: false }
            ).then((result) => {
                resolve({
                    updated: result,
                    message: 'todo updated successfully'
                }), (err) => {
                    reject({
                        error: err,
                        message: 'Unable to edit'
                    })
                }
            }).catch((error) => {
                reject({
                    error: error,
                    message: 'There was some error while updating.'
                })
            })
        })
    }

}
