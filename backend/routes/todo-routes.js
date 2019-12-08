const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo-controller');

router.post('/createTodo', (req, res) => {
    todoController.createTodo(req).then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
});

router.get('/getTodoList', (req, res) => {
    todoController.retrieveAllTodo().then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.put('/editTodo/:id', (req, res) => {
    todoController.editTodo(req).then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

router.delete('/deleteTodo/:id', (req, res) => {
    todoController.deleteTodo(req).then((data) => {
        res.status(201).send(data);
    }).catch((error) => {
        res.status(500).send(error);
    })
})

module.exports = router;