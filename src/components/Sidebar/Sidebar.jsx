import "./Sidebar.css";
export default function Sidebar({
  addProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button className="btn" onClick={addProject}>
          + Add Project
        </button>
      </div>
      <ul>
        {projects.map((project) => {
          let classStyle;
          if (project.id === selectedProjectId) {
            classStyle = "activeProject";
          } else {
            classStyle = "notActiveProject";
          }
          return (
            <li key={project.id}>
              <button
                className={`projectName ${classStyle}`}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
