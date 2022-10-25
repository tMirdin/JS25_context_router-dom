import axios from "axios";
import React, { createContext, useState } from "react";

export const taskContext = createContext();
// console.log(taskContext);
const API = "http://localhost:8000/tasks";

const TodoContextProvider = ({ children }) => {
  // let age = 45;
  // let lastName = "Jackson";
  // let job = "programmer";
  // let name = "Michael";
  // let cloud = {
  //   name,
  //   age,
  //   lastName: lastName,
  //   job: job,
  // };
  // console.log(cloud);

  // Create task
  function addTask(obj) {
    try {
      axios.post(API, obj);
      readTask();
    } catch (error) {
      console.log(error);
    }
  }

  // Read Task
  const [taskArr, setTaskArr] = useState([]);
  let arr = [];
  async function readTask() {
    const { data } = await axios(API);
    setTaskArr(data);
  }
  // console.log(taskArr);

  // delete task
  async function deleteTask(id) {
    await axios.delete(`${API}/${id}`);
    readTask();
  }

  const cloud = {
    addTask,
    readTask,
    taskArr,
    arr,
    deleteTask,
  };
  return <taskContext.Provider value={cloud}>{children}</taskContext.Provider>;
};

export default TodoContextProvider;
