import { useState } from "react";
import Home from "./Home/Home.jsx";
import NewProject from "./NewProject/NewProject.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function App() {
  const [addProject, setAddProject] = useState({
    projects: [],
    pageState: undefined,
  });

  function handleAddProject(projectData) {
    setAddProject((pervState) => {
      const ProjectID = Math.random();
      const newProject = {
        ...projectData,
        id: ProjectID,
      };
      return {
        ...pervState,
        pageState: undefined,
        projects: [...pervState.projects, newProject],
      };
    });
  }
  function handleProjectPage() {
    setAddProject((pervState) => {
      return { ...pervState, pageState: null };
    });
  }

  function handleCancleProject() {
    setAddProject((pervState) => {
      return { ...pervState, pageState: undefined };
    });
  }

  let content;
  if (addProject.pageState === null) {
    content = (
      <NewProject onAdd={handleAddProject} handleCancle={handleCancleProject} />
    );
  } else if (addProject.pageState === undefined) {
    content = <Home addProject={handleProjectPage} />;
  }
  return (
    <main>
      <Sidebar addProject={handleProjectPage} projects={addProject.projects} />
      {content}
    </main>
  );
}
