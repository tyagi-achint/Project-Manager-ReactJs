import { useEffect, useState } from "react";
import Home from "./Home/Home.jsx";
import NewProject from "./NewProject/NewProject.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import SelectedProject from "./SelectedProject/SelectedProject.jsx";

export default function App() {
  const initialState = JSON.parse(
    localStorage.getItem("project-track-manager")
  ) || {
    projects: [],
    pageState: undefined,
    tasks: [],
  };
  const [addProject, setAddProject] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("project-track-manager", JSON.stringify(addProject));
  }, [addProject]);

  function handleSelectProject(id) {
    setAddProject((pervState) => {
      return { ...pervState, pageState: id };
    });
  }

  function handleGoHome() {
    setAddProject((pervState) => {
      return { ...pervState, pageState: undefined };
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

  function handleAddTask(text) {
    setAddProject((pervState) => {
      const TaskID = Math.random();
      const newTask = {
        text: text,
        id: TaskID,
      };
      return {
        ...pervState,
        tasks: [newTask, ...pervState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setAddProject((pervState) => {
      return {
        ...pervState,
        tasks: pervState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  let selectedProject = addProject.projects.find(
    (project) => project.id === addProject.pageState
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={addProject.tasks}
    />
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
        goHome={handleGoHome}
      />
      {content}
    </main>
  );
}
