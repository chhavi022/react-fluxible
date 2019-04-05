export const addTodo = function (actionContext: any, payload: object, done: Function) {
  actionContext.dispatch('ADD_TODO', payload);
  done();
};

export const getTodo = function(actionContext: any, payload: object, done: Function) {
  actionContext.dispatch('GET_TODO', payload);
  done();
}

export const deleteTodo = (actionContext: any, payload: number, done: Function) => {
  actionContext.dispatch('DELETE_TODO', payload);
  done();
}