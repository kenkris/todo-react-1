import React from 'react'

export default function TodoItem({todo, toggleTodoItem}) {

  function handleToggleTodoItem(){
    toggleTodoItem(todo.id)
  }

  return (
    <div>
        <label>
            <input type="checkbox" checked={todo.completed} onChange={handleToggleTodoItem} />
            {todo.name}
        </label>
    </div>
  )
}
