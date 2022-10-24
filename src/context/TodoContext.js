import React, { createContext } from "react";

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
  const cloud = {};
  return <taskContext.Provider value={cloud}>{children}</taskContext.Provider>;
};

export default TodoContextProvider;
