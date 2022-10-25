import React from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import ReadTask from "./Components/ReadTask/ReadTask";
import TodoContextProvider from "./context/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <AddTodo />
      <ReadTask />
    </TodoContextProvider>
  );
};

export default App;
