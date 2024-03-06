import Tasks from "../Tasks/Tasks";
import "./SelectedProject.css";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div id="SelectedProject">
      <header>
        <div>
          <h1>{project.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>
        <p className="date">{formattedDate}</p>
        <p className="description">{project.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} Tasks={tasks} />
    </div>
  );
}
