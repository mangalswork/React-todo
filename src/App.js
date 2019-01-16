import React, { Component } from 'react';
import './App.css';

import Todo from './components/todo';
import TodoList from './components/todoList';

class App extends Component {
  inputElement = React.createRef();
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    });
    this.setState({
      items: filteredItems
    });
  };

  addTodo = e => {
    e.preventDefault();
    const ele = this.inputElement.current.value;
    const newItem = { text: ele, key: Date.now() };
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        newItem: { text: '', key: '' }
      });
    }
  };
  render() {
    return (
      <div>
        <div className='todo-container'>
          <Todo addTodo={this.addTodo} inputElement={this.inputElement} />
          <TodoList entries={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

export default App;
