import Todo from '../models/todo'
import TodoItem from './TodoItem'
interface ITodos {
  items: Todo[];
}

const Todos = (props: ITodos) => {
  return (
    <ul>
      {props.items.map((item) => (
    <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todos;
