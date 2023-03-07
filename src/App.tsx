import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import classes from './App.module.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleClick = (todoId: number) => {

    setTodos
    (
      todos.map((item) => {
        if (item.id === todoId) 
        {
          //Change text decoration to underline
          if(item.isStrikedThrough === false){return { ...item, isStrikedThrough: true};}
          else {return { ...item, isStrikedThrough: false };}   
        } 
        else 
        {
          return item;
        }
      })
    )
  }


  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText, false);

    setTodos((currentTodos) => {
      return currentTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className={classes.div}>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos
        todoDone={handleClick}
        items={todos}
        onRemoveTodo={removeTodoHandler}></Todos>
    </div>
  );
}

export default App;
