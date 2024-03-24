import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  function handleKeyDown(event){
    if(event.key === "Enter"){
      const inputty = document.querySelector("#inputty");
      setTodos([...todos, inputty.value]);
      inputty.value = "";
    }
  }
  return (
    <>
      <div className="main">
        Todo App
        <input onKeyDown={handleKeyDown} id='inputty' type="text" />
        <ul>
          {todos.length > 0? todos.map((todo, index)=>{
            return <li key={index}>{todo}</li>
          }): <li>Nothing To Do</li> }
        </ul>
      </div>
    </>
  )
}

export default App
