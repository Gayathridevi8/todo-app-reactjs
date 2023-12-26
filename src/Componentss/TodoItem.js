import React from "react";

export default function TodoItem({
  key,
  id,
  completed,
  title,
  toggleTodo,
  deleteTodo,
}) {
  return (
    <li key={key}>
      <label>
        <input
          type="checkbox"
          value={title}
          checked={completed}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
            console.log(e.target.checked);
          }}
        />
        {title}
      </label>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
