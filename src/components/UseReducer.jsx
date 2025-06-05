import React, { act, useReducer, useState } from "react";
// simple counter using useReducer hook
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
// To do list using useReducer hook
const initialTodos = []
const todoReducer = (state, action) =>{
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {id:Date.now(), text:action.payload, completed: false}
            ]
        case 'REMOVE_TODO':
            return state.filter(todo=> todo.id !== action.payload)
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
    
        default:
            throw new Error("Unhandled action...");
    }
}
function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState('')
  const [todoList, dispatchTodo] = useReducer(todoReducer, initialTodos)

  const handleAddTodo = (e) =>{
    e.preventDefault()
    if(newTodo.trim() === '') return
    dispatchTodo({type:'ADD_TODO', payload:newTodo})
    setNewTodo('')
  }
  return (
    <div>
      <h4>useReducer Hook</h4>
      <h5>Count : {count}</h5>
      <button onClick={() => dispatch("INCREMENT")}>Increment</button>
      <button onClick={() => dispatch("DECREMENT")}>Decrement</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
      <h4>To Do List using useReducer Hook</h4>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todo">To Do task</label>
        <input type="text" id="todo" onChange={e => setNewTodo(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      <ol>
        {todoList.map(todo=>(
            <div  key={todo.id}>
            <li style={{textDecoration: todo.completed ? 'line-through': 'none'}} onClick={()=> dispatchTodo({type:"TOGGLE_TODO", payload:todo.id})}>{todo.text}
            </li>
            <button  onClick={()=>dispatchTodo({type:'REMOVE_TODO', payload:todo.id})}>Remove</button>
            </div>
        ))}
      </ol>
    </div>
  );
}

export default UseReducer;
