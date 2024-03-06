import "./Sidebar.css";
export default function Sidebar({ addProject, projects }) {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button className="btn" onClick={addProject}>
          + Add Project
        </button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="projectName">{project.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
