import * as React from 'react';
import PropTypes from 'prop-types';
import { addTodo } from '../actions/TodoActions';

interface State {
  name: string,
  description: string,
  completed: boolean
}

interface Props { }

class AddTodo extends React.Component<Props, State> {

  static contextTypes = {
    executeAction: PropTypes.func,
    getStore: PropTypes.func
  };

  state: State = {
    name: "",
    description: "",
    completed: false
  };

  handleChange = (type: string, e: React.FormEvent<HTMLInputElement>) => {
    let val = e.currentTarget.value;
    this.setState(state => ({ ...state, [type]: val }));
  }

  handleClick = () => {
    this.context.executeAction(addTodo,
      { id: new Date().getMilliseconds(), name: this.state.name, description: this.state.description });
  }
  
  render() {
    return (
      <div>
        <input type="text" name="name" value={this.state.name}
          placeholder={"enter task name"} onChange={this.handleChange.bind(this, 'name')}
        />
        <input type="text" name="description" value={this.state.description}
          placeholder={"enter task description"} onChange={this.handleChange.bind(this, 'description')}
        />
        <input type="button" value="Add" onClick={this.handleClick} />
      </div>
    );
  }
}

export default AddTodo;

