import homeImg from "../../assets/no-projects.png";
import "./Home.css";

export default function Home({ addProject }) {
  return (
    <div id="Home">
      <img src={homeImg} alt="A Notepad" />
      <h2>Project Track Manager</h2>
      <p>Select a project or get started with a new project.</p>
      <span>
        <button className="btn" onClick={addProject}>
          Create a Project
        </button>
      </span>
    </div>
  );
}
