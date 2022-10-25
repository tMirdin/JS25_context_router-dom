import React, { useContext, useEffect, useState } from "react";
import { taskContext } from "../../context/TodoContext";

const ReadTask = () => {
  const { readTask, taskArr, deleteTask } = useContext(taskContext);

  useEffect(() => {
    readTask();
  }, []);

  return (
    <div>
      <ul>
        {taskArr.map((item) => (
          <li key={item.id}>
            {item.task}
            <button onClick={() => deleteTask(item.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadTask;
