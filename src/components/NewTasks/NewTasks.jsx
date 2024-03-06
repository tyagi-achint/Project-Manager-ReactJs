import { useState } from "react";
import "./NewTasks.css";

export default function NewTasks({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <section id="NewTasks">
      <input onChange={handleChange} type="text" value={enteredTask} />
      <button onClick={handleClick}>Add Task</button>
    </section>
  );
}
