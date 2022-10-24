import React from "react";
import AddTodo from "./Components/AddTodo/AddTodo";
import TodoContextProvider from "./context/TodoContext";

const App = () => {
  return (
    <TodoContextProvider>
      <AddTodo />
    </TodoContextProvider>
  );
};

export default App;
