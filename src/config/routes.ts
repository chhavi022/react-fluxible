import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

export default {
  home: {
    method: 'GET',
    path: '/',
    handler: TodoList,
    action: require('../actions/TodoActions')
  },
  about: {
    method: 'GET',
    path: '/add',
    handler: AddTodo
  },
  // user: {
  //   method: 'GET',
  //   path: '/user/:id',
  //   handler: require('../components/User.jsx')
  // }
};