import React, { Component } from 'react';

class Todo extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo}>
          <input placeholder='Task' ref={this.props.inputElement} />
          <button type='submit'>Add</button>
        </form>
      </div>
    );
  }
}

export default Todo;
