import express from 'express';

import TodoController from '../controllers/control';

const router = express.Router();

// get all todos
router.get('/api/todos', TodoController.getAllTodos);

// get todos by id
router.get('/api/todos/:id', TodoController.getTodoById);

// create new todo
router.post('/api/todos', TodoController.postTodo);

// update request
router.put('/api/todos/:id', TodoController.updateTodo);

// Delete Todo
router.delete('/api/todos/:id', TodoController.deleteTodo);

export default router;
