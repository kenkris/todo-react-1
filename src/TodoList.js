import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodoItem}) {
  return (
    todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} toggleTodoItem={toggleTodoItem}/>
    })
  )
}
