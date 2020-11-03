import React, { useState } from "react";

import "./App.css";
import backgroundImage from "./assets/tech-glass.jpg";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    "Desenvolvimento de app",
    "Front-end web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
    console.log(projects, `Novo projeto`);
  }

  return (
    <>
      <Header title='Projects' />

      <img src={backgroundImage} width={300} />

      <ul>
        {projects.map(project => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type='button' onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}
export default App;
