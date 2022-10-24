import React, { useContext } from "react";
import { taskContext } from "../../context/TodoContext";

const AddTodo = () => {
  const value = useContext(taskContext);
  return (
    <div>
      <input type="text" />
      <button>Добавить</button>
    </div>
  );
};

export default AddTodo;
