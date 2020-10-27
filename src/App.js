// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const toDoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDoList: toDoList
    };
  }

  handleToggleTask = (itemID) => {
    this.setState({
      toDoList: this.state.toDoList.map(item => {
        if(item.id ===  itemID) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  handleAddTasks = task => {
    this.setState({
      toDoList: [...this.state.toDoList, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  clearItems = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(item => (!item.completed))
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList toDoList={this.state.toDoList} handleToggleTask={this.handleToggleTask} />
        <TodoForm handleAddTasks={this.handleAddTasks} clearItems={this.clearItems} />
      </div>
    );
  }
}

export default App;
