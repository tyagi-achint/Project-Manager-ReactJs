import NewTasks from "../NewTasks/NewTasks";
import "./Tasks.css";
export default function Tasks({ Tasks, onAdd, onDelete }) {
  return (
    <section id="Tasks">
      <h2>Tasks</h2>
      <NewTasks onAdd={onAdd} />
      {Tasks.length === 0 ? (
        <p>This Project does not have any task yet.</p>
      ) : (
        <ul>
          {Tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => onDelete(task.id)}>Clear</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
