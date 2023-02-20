interface ITodoItem {
    text: string;
    onRemoveTodo: (event:React.MouseEvent) => void; 
}


function TodoItem(props: ITodoItem) {
    return <li onClick={props.onRemoveTodo}>{props.text}</li>;
}

export default TodoItem