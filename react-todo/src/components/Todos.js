import React, { Component } from 'react';
import Todo from './Todo';

class Todos extends Component {
    render() {
        let Todos = this.props.todos.map( (todo) => {
            return(
                <Todo
                key={Todo.id}
                todo={todo}/>
            )
        })
        return(
            <div className="todos">
                {todos}
            </div>
        )
    }
}

export default Todos;