import React from 'react'

const Todo = props => {
  const handleClick = () => {
    props.handleToggleTask(props.item.id)
  }
  return (
    <div onClick={handleClick}>
      {props.item.completed ? <p style={{textDecoration: 'line-through'}}>{props.item.task}</p> : <p>{props.item.task}</p> }
    </div>
  )
}

export default Todo