import React, { Component } from 'react';

class TodoList extends Component {
  createTasks = item => {
    return (
      <li title={item.key} key={item.key}>
        <span />
        {item.text}
        <div>
          <span title='Edit'>E</span>
          <span title='Delete' onClick={() => this.props.deleteItem(item.key)}>
            D
          </span>
        </div>
      </li>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return <ul>{listItems}</ul>;
  }
}

export default TodoList;
