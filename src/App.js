import "./App.css";
import React from "react";

const Spinner = () => <div className="Spinner"></div>;

const Item = ({ name, done, id }) => {
  const [loading, setLoading] = React.useState(false);
  const markAsDone = async (id) => {
    console.log("Making as done!");
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };
  return (
    <div className="Item">
      {loading ? (
        <Spinner />
      ) : (
        <input
          className="Input-CheckBox"
          type="checkbox"
          checked={done}
          onChange={(e) => {
            markAsDone();
          }}
          disabled={done}
        />
      )}
      <p className={done ? "Text-Crossed" : "Text-Normal"}>{name}</p>
    </div>
  );
};

const App = () => {
  const [newTodo, setNewTodo] = React.useState("");
  const [todos, setTodos] = React.useState([
    {
      taskname: "Follow Author",
      done: false,
    },
    {
      taskname: "Follow Author",
      done: true,
    },
    {
      taskname: "Follow Author",
      done: false,
    },
    {
      taskname: "Follow Author",
      done: false,
    },
    {
      taskname: "Follow Author",
      done: false,
    },
    {
      taskname: "Follow Author",
      done: false,
    },
    {
      taskname: "Follow Author",
      done: false,
    },
    {
      taskname: "Follow Author",
      done: false,
    },
  ]);
  return (
    <div className="App">
      <div className="Heading">
        <h1>Web3 Todo App</h1>
        <h5>Build with Solidity on Ethereum</h5>
      </div>
      <div className="Add-Todo">
        <input
          type="text"
          placeholder="Enter Task To Add"
          name="todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.currentTarget.value)}
        />
        <input
          type="submit"
          value="Add Todo"
          onClick={() => {
            console.log(newTodo);
          }}
        />
      </div>
      <div className="View-Todo">
        {todos.map((todo, index) => (
          <Item name={todo.taskname} done={todo.done} key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

export default App;

// struct Task{
//   string taskname;
//   bool done; //if true task is done
// }
