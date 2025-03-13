import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleEdit = () => {
    console.log("Edit");
  };
  const handleDelete = () => {
    console.log("Delete");
  };
  const handleChange = (e) => {
    settodo(e.target.value);
    console.log(e.target.value);
  };
  const handleAdd = () => {
    // console.log("Add");
    console.log(todo);
    settodos([...todos, { todo, isCompleted: false }]);
    settodo("");
    console.log(todos);
  };

  return (
    <>
      <Nav />
      <div className="bg-amber-200 w-1/2 m-auto px-5 py-3">
        <div className="">
          <h1 className="font-bold">Add a Todo</h1>
          <input
            onChange={handleChange}
            value={todo}
            className="bg-amber-50 border-1 w-1/2 h-9"
            type="text"
          />
          <button
            onClick={handleAdd}
            className="bg-amber-500 py-1 px-4 hover:bg-amber-600 rounded-md ml-2"
          >
            Add
          </button>
        </div>
        <div className="mt-5 ">
          <h1 className="font-bold">Your Todo's</h1>
          <div className="bg-amber-200 w-full p-2 min-h-[70vh] mt-1 border-1">
            {todos.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full bg-indigo-400 flex-wrap justify-between h-16 p-1 border-b-2"
                >
                  <div className="flex gap-3 px-1 w-[75%]  bg-amber-900">
                    <input type="checkbox" />
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={handleEdit}
                      className="bg-amber-500 py-1 px-4 hover:bg-amber-600 rounded-md "
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="bg-amber-500 py-1 px-4 hover:bg-amber-600 rounded-md "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
