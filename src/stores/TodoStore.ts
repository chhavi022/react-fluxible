import BaseStore from 'fluxible/addons/BaseStore';

class TodoStore extends BaseStore {

  list: Array<object> = [{
    id: new Date().getMilliseconds(),
    name: "Task1",
    description: "Task Description 1"
  }];
  
  static storeName: string;
  static handlers: object;

  constructor(dispatcher: any) {
    super(dispatcher);
  }

  addTodo = (payload: object) => {
    this.list.push(payload);
    this.emitChange();
  }

  deleteTodo = (payload: number) => {
    // this.list = this.list.filter(task => task.id !== payload);
    this.list.splice(payload, 1)
    this.emitChange();
  }

  getlist() { return this.list; }

}

TodoStore.storeName = 'TodoStore';
TodoStore.handlers = {
  'GET_TODO': 'getlist',
  'ADD_TODO': 'addTodo',
  'DELETE_TODO': 'deleteTodo'
};

export default TodoStore;