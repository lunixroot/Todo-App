import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
const [finsh, setfinsh] = useState(true);

  useEffect(() => {
    let todostring = localStorage.getItem("todos");
    if(todostring){
      let todos = JSON.parse(todostring);
      settodos(todos);
    }
  }, [])
  
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const togglefinish = () => {
    setfinsh(!finsh);
  }

  const handleEdit = (e, id) => {
     let t = todos.filter( i=>i.id===id)
     settodo(t[0].todo);
     let newTodos = todos.filter(item => {
      return item.id !==id;
    });
    settodos(newTodos);
    saveToLocalStorage();
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !==id;
    });
    settodos(newTodos);
    saveToLocalStorage();
  };

  const handleChange = (e) => {
    settodo(e.target.value);

  };

  const handleAdd = () => {
    settodos([...todos, {id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
    saveToLocalStorage();
  };

  const handleCheck = (e) => {
    let id = e.target.name;
    let newTodos = todos.map((item) => {
      item.id === id ? (item.isCompleted = !item.isCompleted) : item;
      return item;
    });
    settodos(newTodos);
    saveToLocalStorage();  }
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
            onClick={handleAdd} disabled={todo.length<=3}
            className="bg-amber-500 py-1 disabled:bg-amber-500 px-4 hover:bg-amber-600 rounded-md ml-2"
          >
            Add
          </button>
        </div>
        <div className="mt-5 ">
          <h1 className="font-bold">Your Todo's</h1>
          <input onChange={togglefinish} type="checkbox" checked={finsh} name="" id="" /> Show Completed Todo's
          <div className="bg-amber-100 w-full p-2 min-h-[70vh] mt-1 border-1">
            {todos.map(item => {
              return (finsh || !item.isCompleted) && <div
                  key={item.id}
                  className="flex w-full flex-wrap justify-between items-center p-1 border-b-2"
                >
                  <div className="flex gap-3 px-1 max-w-[75%]">
                    <input type="checkbox" onChange={handleCheck} name={item.id} checked={item.isCompleted} id=""/>
                    <div className={item.isCompleted ? "line-through" : ""}>
                      {item.todo}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={(e)=>handleEdit(e, item.id )}
                      className="bg-amber-500 h-8 py-1 px-4 hover:bg-amber-600 rounded-md "
                    >
                      Edit
                    </button>
                    <button
                      onClick={(e)=>{handleDelete(e, item.id)}}
                      className="bg-amber-500 h-8 py-1 px-4 hover:bg-amber-600 rounded-md "
                    >
                      Delete
                    </button>
                  </div>
                </div>
            })} 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
