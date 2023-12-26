import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Componentss/Form";
import TodoList from "./Componentss/TodoList";

function App() {
  // const [todos, setTodos] = useState([]);
  // const [todos, setTodos] = useState(()=>{JSON.parse(localStorage.getItem("ITEMS"))});
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");

    if (localValue === null) return [];
    else {
      return JSON.parse(localValue);
    }
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: true },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  //It must be only done as function

  return (
    <>
      <Form onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
