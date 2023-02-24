import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

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
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos
        toggler={handleToggleTodo}
        items={todos}
        onRemoveTodo={removeTodoHandler}
      ></Todos>
    </div>
  );
}

export default App;
