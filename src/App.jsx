import { useState } from "react";
import "./App.css";
import { Task } from "./components/task";
import { nanoid } from "nanoid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="background__circle"></div>
      <div className="board__frame">
        <div className="board__content">
          <h1>ToDo</h1>
          <div id="tasksContainer">
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                done={task.done}
                title={task.title}
                setTasks={setTasks}
              />
            ))}
          </div>
          <form className="item" id="taskForm">
            <div className="checkbox"></div>
            <input
              type="text"
              name="todoInput"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              id="todoInput"
            />
            <button
              type="submit"
              id="addBtn"
              onClick={(e) => {
                e.preventDefault();
                setTasks([
                  ...tasks,
                  { id: nanoid(), title: inputValue, done: false },
                ]);

                setInputValue("");
              }}
            >
              +
            </button>
          </form>

          <div className="clip__top">
            <div className="clip__hole"></div>
          </div>
          <div className="clip">
            <div className="clip__border-top"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
