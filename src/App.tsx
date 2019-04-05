import * as React from 'react';
import PropTypes from 'prop-types';
import { connectToStores, provideContext } from 'fluxible-addons-react';
import { handleHistory, NavLink } from 'fluxible-router';

import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoStore from './stores/TodoStore';
import About from './components/About';

interface Props {
  currentRoute: any
}

class App extends React.Component<Props> {

  static contextTypes = {
    executeAction: PropTypes.func,
    getStore: PropTypes.func
  };

  render() {
    // console.log(this.props)
    // const Handler = this.props.currentRoute ? this.props.currentRoute.get('handler') : About;
    return (
      <div className="App">
        <header>
          React App Using Typescript
        </header>
        {/* <div>
          <ul>
            <li><NavLink href='/' activeStyle={{ backgroundColor: '#ccc' }}>Home</NavLink></li>
            <li><NavLink href='add' >Add Todo</NavLink></li>
          </ul>
        </div> */}
        <AddTodo />
        <TodoList />
        {/* <Handler /> */}
      </div>
    );
  }
}

export default provideContext(connectToStores((App), [TodoStore], (context, props) => ({})));
