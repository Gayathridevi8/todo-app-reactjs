import { useState } from "react";
import React from "react";
// import addTodo from "./Componentss/Form";
export default function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // setTodos([
    //   ...todos,
    //   { id: crypto.randomUUID(), title: newItem, completed: true },
    // ]);  if I repeat this two times, I couldn't get the same todo two times
    //so it was wrong, so I switch to the below way
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <h1>{newItem}</h1>
      </div>

      <button>Add</button>
    </form>
  );
}
