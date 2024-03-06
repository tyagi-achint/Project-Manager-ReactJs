import "./Sidebar.css";
export default function Sidebar({ addProject }) {
  return (
    <aside>
      <h2>Your Projects</h2>
      <div>
        <button className="btn" onClick={addProject}>
          + Add Project
        </button>
      </div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </aside>
  );
}
