import { useState } from "react";
import Home from "./Home/Home.jsx";
import NewProject from "./NewProject/NewProject.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

export default function App() {
  const [addProject, setAddProject] = useState({
    projects: [],
    pageState: undefined,
  });
  function handleProjectPage() {
    setAddProject((pervAddProject) => {
      return { ...pervAddProject, pageState: null };
    });
  }

  let content;
  if (addProject.pageState === null) {
    content = <NewProject />;
  } else if (addProject.pageState === undefined) {
    content = <Home addProject={handleProjectPage} />;
  }
  return (
    <main>
      <Sidebar addProject={handleProjectPage} />
      {content}
    </main>
  );
}
