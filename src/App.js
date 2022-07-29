import React, { useState, useRef, useEffect } from "react"
import TodoList from "./TodoList"
import {v4} from 'uuid';

function App() {

  const LOCAL_STORAGE_KEY = "todoApp"
  const [todos, setTodos] = useState([])
  const newTodoNameRef = useRef()

  useEffect(() => {
    const localStoredTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

    if(localStoredTodos)
      setTodos(localStoredTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodoItem(e){
    const newTodoName = newTodoNameRef.current.value
    if(newTodoName === "")
      return

      setTodos(prevTodos => {

      return [...prevTodos, {id: v4(), name: newTodoName, completed: false}]
    })
    newTodoNameRef.current.value = null
  }

  function toggleTodoItem(id){
    const todosCopy = [...todos]
    const todo = todosCopy.find(todo => todo.id === id)
    todo.completed = !todo.completed
    setTodos(todosCopy)
  }

  function handleClearCompleted(){
    const clearedTodosRemoved = todos.filter(todo => !todo.completed)
    setTodos(clearedTodosRemoved)
  }

  return (
    <>
      <input ref={newTodoNameRef} type="text=" />
      <button onClick={handleAddTodoItem}>Add</button>
      <button onClick={handleClearCompleted}>Clear list</button>
      <TodoList todos={todos} toggleTodoItem={toggleTodoItem} />
      <div>{todos.filter(todo => !todo.completed).length} left todo</div>
    </>
  )
}

export default App;
