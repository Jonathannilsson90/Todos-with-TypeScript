interface ITodoItem {
    text: string;
}


const TodoItem = (props: ITodoItem) => {
    return <li>{props.text}</li>
};

export default TodoItem