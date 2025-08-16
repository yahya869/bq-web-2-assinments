import { useState } from "react";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null); // to track which todo is being edited

  function readInputValue(event) {
    setInput(event.target.value);
  }

  function addTodo() {
    if (!input) return alert('Input Value Is Required');

    if (editIndex !== null) {
      // Updating existing todo
      const updatedList = [...todoList];
      updatedList[editIndex] = input;
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      // Adding new todo
      setTodoList([...todoList, input]);
    }

    setInput('');
  }

  function deleteTodo(index) {
    const copyList = [...todoList];
    copyList.splice(index, 1);
    setTodoList(copyList);
  }

  function updateTodo(index) {
    setInput(todoList[index]); // put the todo in the input box
    setEditIndex(index); // mark that we are editing
  }

  return (
    <>
     <div className="container">
        <h1>ToDo</h1>
        <h2>Web-App</h2>
      <div className="box">
        <h3>Add Your Goals</h3>
      <input
        type="text"
        value={input}
        placeholder="Add Goal"
        onChange={readInputValue}
      />
      <button className={editIndex !== null ? "update" : "add"} onClick={addTodo}>{editIndex !== null ? "Update" : "Add"}</button>

      {todoList.map((todo, index) => (
        <div className="todo" key={index}>
          <li type="index">{todo}
          <button className="update" onClick={() => updateTodo(index)}>Update</button>
          <button className="delete" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        </div>
      ))}
      </div>
      </div>
    </>
  );
}

export default App;
