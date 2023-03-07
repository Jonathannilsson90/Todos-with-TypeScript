
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './TodoList.module.css'
interface ITodoItem {
    text: string;
    id: number;
    todoDone: (id: number) => void;
    onRemoveTodo: (id: number) => void; 
    isStrikedThrough: boolean
  }


function TodoItem(props: ITodoItem) {
    const handleRemoveClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        props.onRemoveTodo(props.id);
      };
    
    
    return (
      <li 
        onClick={() => props.todoDone(props.id)}  
        style={{ textDecoration: props.isStrikedThrough ? 'line-through' : 'none' }}  
        className={classes.li}>
        {props.text}
        <FontAwesomeIcon className={classes.icon} onClick={handleRemoveClick} icon={faTrash} />
      </li>
    );
  }

export default TodoItem;