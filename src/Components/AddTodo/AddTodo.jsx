import React, { useContext, useState } from "react";
import { taskContext } from "../../context/TodoContext";

const AddTodo = () => {
  const { addTask } = useContext(taskContext);

  const [inpTask, setInpTask] = useState([]);

  function handleAdd() {
    if (!inpTask) {
      alert("ЗАполните поле!");
      return;
    }
    let newTask = {
      task: inpTask,
      time: new Date(),
    };
    addTask(newTask);
    setInpTask("");
  }
  return (
    <div>
      <input
        type="text"
        value={inpTask}
        onChange={(e) => setInpTask(e.target.value)}
      />
      <button onClick={handleAdd}>Добавить</button>
    </div>
  );
};

export default AddTodo;
