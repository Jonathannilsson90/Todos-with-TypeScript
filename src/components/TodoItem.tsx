interface ITodoItem {
    text: string;
    onRemoveTodo: (event:React.MouseEvent) => void; 
}


function TodoItem(props: ITodoItem) {
    return (
    <li>{props.text}
    <button onClick={props.onRemoveTodo}>Remove</button>
    </li>
 );
}

export default TodoItem