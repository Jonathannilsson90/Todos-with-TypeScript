import {useRef} from "react";
import classes from './css/NewTodo.module.css'
interface IAddTodo {
  onAddTodo: (text: string) => void;
}

const NewTodo = ({onAddTodo}:IAddTodo) => {
  /// Initialize Refs to fetch data from the form
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const inputText = todoTextInputRef.current!.value;

    if (inputText.trim().length === 0) {
      /// Avoid blank Todos.
      return;
    }

    onAddTodo(inputText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.text} htmlFor="text">
        Add Todos to the list!
      </label>
      <input
      placeholder="Todo:"
        type="text"
        id="text"
        className={classes.textfield}
        ref={todoTextInputRef}
      />
      <button className={classes.button}>ADD</button>
    </form>
  );
};

export default NewTodo;
