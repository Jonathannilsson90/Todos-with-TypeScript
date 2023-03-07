import Todo from "../models/todo";
import TodoItem from "./TodoList";

import classes from "./Todos.module.css";

interface ITodos {
  items: Todo[];
  onRemoveTodo: (id: number) => void;
  todoDone: (id:number) => void;

}


const Todos = ({items, onRemoveTodo, todoDone}: ITodos) => {
  return (
    <ul className={classes.ul}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          isStrikedThrough={item.isStrikedThrough}
          todoDone={todoDone}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
};
export default Todos;
