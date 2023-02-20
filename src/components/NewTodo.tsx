import { useRef } from 'react';

const NewTodo = () => {

/// Initialize Refs to fetch data from the form    
const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent ) => {
e.preventDefault();

const inputText = todoTextInputRef.current!.value

if (inputText.trim().length === 0) {
    /// Make errorhandler later.
    return
}

    }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Type Todo:</label>
      <input type="text" id="text" ref={todoTextInputRef}/>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
