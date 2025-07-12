import { useState } from "react"
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("")

  function addTodo() {
    setTodos(prev => [...prev, todo])
    setTodo("")
  }

  return (
    <>
      <h1>Welcome to Todo App</h1>
      <div>
        <input type="text" placeholder="enter your todo" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <h3>{todo}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
