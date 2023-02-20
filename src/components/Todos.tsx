import Todo from "../models/todo";
import TodoItem from "./TodoItem";
interface ITodos {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}

const Todos = (props: ITodos) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
