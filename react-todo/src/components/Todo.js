import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return(
            <p data-todos-index={this.props.todos.id}>
                <span>{this.props.todo.body}</span>
            </p>
        )
    }
}

export default Todo;