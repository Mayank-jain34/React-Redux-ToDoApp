import React,{PropTypes } from 'react'

const todo = ({ onClick, completed, text })=>(
      <li onClick = {onClick}
      style = {{ textDecoration: completed ? 'line-through' : 'none'}}
      >
        {text}
      </li>
)

todo.PropTypes = {
  onClick : PropTypes.func.isRequired,
  completed:PropTypes.bool.isRequired,
  text:PropTypes.string.isRequired
}
export default todo
