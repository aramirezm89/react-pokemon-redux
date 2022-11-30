import React, { useState } from 'react'
import { useGetTodosQuery,useGetTodoByIdQuery } from '../store/apis/todos'

export const Todo = () => {

  const [todoId, setTodoId] = useState(1)
  /*   const {data:todos=[],isLoading} = useGetTodosQuery(); */
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nexTodo = () =>{
    setTodoId(todoId+1);
  }

  
  const prevTodo = () => {
    if(todoId===1) return
    setTodoId(todoId - 1);
  };
  return (
    <>
      <h1>Todos - RTK query</h1>
      <hr />
      <h4>isLoading {isLoading ? "true" : "false"}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/*  <ul>
        {todos.map(todo =>(

            <li key={todo.id}>
                <strong>{todo.completed?'Done ':'Pending '}</strong>
                {todo.title}
            </li>
        ))}
     </ul>
 */}
      <button onClick={() => prevTodo()}>Previous Todo</button>
      <button onClick={() => nexTodo()}>Next Todo</button>
    </>
  );
}
