import React from "react";
import Todos from "./components/Todos";
import Todo from './models/todo';

function App() {
const todos = [
  new Todo('learn to be cool'),
  new Todo('learn to be coolio')
]

  return (
    <div>
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
