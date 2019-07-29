import uuid from 'uuid';

import todos from '../DumData/data';

class TodoController {
  // Get all todos
  static getAllTodos(req, res) {
    res.json(todos);
  }

  // Get todo br id
  static getTodoById(req, res) {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.id);
    const todo = todos.find(each => each.id === id);
    if (!todo) {
      return res
        .status(400)
        .json({ message: `Todo with id ${id} cannot be found` });
    }
    return res.json({ todo });
  }

  // Post new todo
  static postTodo(req, res) {
    const newTodos = {
      // eslint-disable-next-line no-undef
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
      created_at: new Date(),
      // eslint-disable-next-line comma-dangle
      completed: 'false'
    };
    if (!newTodos.name || !newTodos.email) {
      return res.json({ message: 'please input a valid name or email' });
    }
    todos.push(newTodos);

    return res.json({ todos });
  }

  // Update todo
  static updateTodo(req, res) {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.id);
    const updatetodo = todos.find(each => each.id === id);
    if (updatetodo) {
      const newTodo = req.body;
      todos.forEach(todo => {
        if (todo.id === id) {
          todo.name = newTodo.name ? newTodo.name : todo.name;
          todo.email = newTodo.email ? newTodo.email : todo.email;
          todo.created_at = newTodo.created_at
            ? newTodo.created_at
            : todo.created_at;

          return res.json({ message: 'update successful', todos });
        }
      });
    }
    return res
      .status(400)
      .json({ message: `Todo with id ${id} cannot be found` });
  }

  // Delete todo
  static deleteTodo(req, res) {
    // eslint-disable-next-line radix
    const id = parseInt(req.params.id);
    const newTodos = todos.find(each => each.id === id);
    if (newTodos) {
      return res.json({
        message: 'Todo deleted',
        // eslint-disable-next-line comma-dangle
        todos: todos.filter(todo => todo.id !== id)
      });
    }
    return res
      .status(404)
      .json({ message: `Todo with id ${id} cannot be found` });
  }
}

export default TodoController;
