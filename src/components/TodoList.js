import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return(
      <div>
        {this.props.toDoList.map(item => <Todo key={item.id} item={item} handleToggleTask={this.props.handleToggleTask}/>)}
      </div>
    )
  }
}

export default TodoList