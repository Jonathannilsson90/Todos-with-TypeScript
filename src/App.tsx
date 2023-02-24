import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isStrikedThrough, setIsStrikedThrough] = useState(false);

  const handleClick = () => {
    setIsStrikedThrough(!isStrikedThrough);
  };
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText,  isStrikedThrough);

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
        isStrikedThrough={isStrikedThrough}
        todoDone={handleClick}
        items={todos}
        onRemoveTodo={removeTodoHandler}
      ></Todos>
    </div>
  );
}

export default App;
