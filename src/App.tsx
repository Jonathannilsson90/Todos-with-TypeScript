import React from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from './models/todo';

function App() {
const todos = [
  new Todo('learn to be cool'),
  new Todo('learn to be coolio')
]

  return (
    <div>
      <NewTodo />
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
