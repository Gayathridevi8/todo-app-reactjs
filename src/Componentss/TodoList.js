import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && <h3>No Todos</h3>}

      {todos.map((todo) => {
        return (
          <TodoItem
            // id={todo.id}
            // completed={todo.completed}
            // title={todo.title}
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
