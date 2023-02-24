import Todo from "../models/todo";
import TodoItem from "./TodoList";

import classes from "./Todos.module.css";

interface ITodos {
  items: Todo[];
  onRemoveTodo: (id: number) => void;
  toggler: (id: number) => void;
}

const Todos = (props: ITodos) => {
  return (
    <ul className={classes.ul}>
      {props.items.map((item) => (
        <TodoItem
          toggler={props.toggler.bind(null, item.id)}
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
