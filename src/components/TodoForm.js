import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleChanges = e => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddTasks(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            value={this.state.input}
            onChange={this.handleChanges}
            placeholder='...todo'
          />
          <button>Add Todo</button>
        </form>
        <button onClick={this.props.clearItems}>Clear Completed</button>
      </div>
    )
  }
}

export default TodoForm