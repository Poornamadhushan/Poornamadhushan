import { createContext, useContext, useState } from 'react';
import { PROJECTS, PENDING_PROJECTS } from '../data/projects';

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [projects, setProjects] = useState(PROJECTS);
  const [pending, setPending] = useState(PENDING_PROJECTS);

  function approveProject(id) {
    const project = pending.find((p) => p.id === id);
    if (project) {
      setProjects((prev) => [
        ...prev,
        { ...project, status: 'published', featured: false, screenshots: [], description: project.shortDescription, githubUrl: '#', datasetUrl: '#', reportUrl: '#' },
      ]);
      setPending((prev) => prev.filter((p) => p.id !== id));
    }
  }

  function rejectProject(id) {
    setPending((prev) => prev.filter((p) => p.id !== id));
  }

  function deleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  function submitProject(data) {
    const newProject = {
      id: Date.now(),
      ...data,
      status: 'pending',
      submittedAt: new Date().toISOString().split('T')[0],
    };
    setPending((prev) => [...prev, newProject]);
    return true;
  }

  return (
    <ProjectContext.Provider value={{ projects, pending, approveProject, rejectProject, deleteProject, submitProject }}>
      {children}
    </ProjectContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProjects() {
  return useContext(ProjectContext);
}
