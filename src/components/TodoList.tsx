import * as React from 'react';
import PropTypes from 'prop-types';
import { deleteTodo } from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

interface State {
  list: Array<any>
}

interface Props { }

class TodoList extends React.Component<Props, State> {
  static contextTypes = {
    executeAction: PropTypes.func,
    getStore: PropTypes.func
  };

  state: State = {
    list: []
  }

  componentDidMount() {
    let a = this.context.getStore(TodoStore).getlist();
    this.setState({ list: a })
  }

  handleDelete = (taskId: number) => this.context.executeAction(deleteTodo, taskId);

  render() {
    return (
      <div>
        {"List of Tasks: "}
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            {this.state.list.map((task, i) => (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td><button onClick={this.handleDelete.bind(this, i)}>{`X`}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TodoList;