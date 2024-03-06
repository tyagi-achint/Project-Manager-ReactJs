import { useState } from "react";
import Home from "./Home/Home.jsx";
import NewProject from "./NewProject/NewProject.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import SelectedProject from "./SelectedProject/SelectedProject.jsx";

export default function App() {
  const [addProject, setAddProject] = useState({
    projects: [],
    pageState: undefined,
  });

  function handleSelectProject(id) {
    setAddProject((pervState) => {
      return { ...pervState, pageState: id };
    });
  }

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
      return {
        ...pervState,
        pageState: undefined,
      };
    });
  }
  function handleDeleteProject() {
    setAddProject((pervState) => {
      return {
        ...pervState,
        pageState: undefined,
        projects: pervState.projects.filter(
          (project) => project.id !== pervState.pageState
        ),
      };
    });
  }

  let selectedProject = addProject.projects.find(
    (project) => project.id === addProject.pageState
  );
  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );
  if (addProject.pageState === null) {
    content = (
      <NewProject onAdd={handleAddProject} handleCancle={handleCancleProject} />
    );
  } else if (addProject.pageState === undefined) {
    content = <Home addProject={handleProjectPage} />;
  }
  return (
    <main>
      <Sidebar
        addProject={handleProjectPage}
        projects={addProject.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={addProject.pageState}
      />
      {content}
    </main>
  );
}
