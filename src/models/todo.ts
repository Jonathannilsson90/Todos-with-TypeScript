class Todo {
    id: number;
    text: string;
    completed: boolean

    constructor(todoText: string, completed: boolean) {
        this.text = todoText
        this.id = Math.random()
       this.completed = completed
    }
}
export default Todo;