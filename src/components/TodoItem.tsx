import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
interface ITodoItem {
    text: string;
    onRemoveTodo: (event:React.MouseEvent) => void; 
}


function TodoItem(props: ITodoItem) {
    return (
    <li>{props.text}
    <FontAwesomeIcon onClick={props.onRemoveTodo} icon={faTrash} />
    </li>
 );
}

export default TodoItem;