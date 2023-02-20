import { useRef } from "react";

interface IAddTodo {
  onAddTodo: (text: string) => void;
}

const NewTodo = (props: IAddTodo) => {
  /// Initialize Refs to fetch data from the form
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const inputText = todoTextInputRef.current!.value;

    if (inputText.trim().length === 0) {
      /// Make errorhandler later.
      return;
    }

    props.onAddTodo(inputText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Type Todo:</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
