import React, { createContext } from "react";

const taskContext = createContext();
console.log(taskContext);

const TodoContextProvider = () => {
  return <taskContext.Provider></taskContext.Provider>;
};

export default TodoContextProvider;
