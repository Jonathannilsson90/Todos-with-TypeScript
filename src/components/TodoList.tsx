
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


function TodoItem({text,id,todoDone,onRemoveTodo,isStrikedThrough}: ITodoItem) {
    const handleRemoveClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        onRemoveTodo(id);
      };
    
    
    return (
      <li 
        onClick={() => todoDone(id)}  
        style={{ textDecoration: isStrikedThrough ? 'line-through' : 'none' }}  
        className={classes.li}>
        {text}
        <FontAwesomeIcon className={classes.icon} onClick={handleRemoveClick} icon={faTrash} />
      </li>
    );
  }

export default TodoItem;