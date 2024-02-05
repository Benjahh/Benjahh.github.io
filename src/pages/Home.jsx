import { useState } from "react";
import { HomeGrid } from "@/components/utils/HomeGrid";
import { ProjectGrid } from "@/components/utils/ProjectGrid";

export const Home = () => {
  const [viewProjects, setViewProjects] = useState(false);
  const [viewIndividualProject, setViewIndividualProject] = useState(null);

  const handleProjectId = (id) => {
    setViewIndividualProject(id);
  };

  const handleViewProjects = (newState) => {
    setViewProjects(viewIndividualProject ? newState || false : !viewProjects);
  };

  return (
    <section className="page__wrapper overflow-visible ">
      <HomeGrid
        handleViewProjects={handleViewProjects}
        handleProjectId={handleProjectId}
        viewProjects={viewProjects}
      />
      <ProjectGrid
        handleProjectId={handleProjectId}
        handleViewProjects={handleViewProjects}
        viewProjects={viewProjects}
        viewIndividualProject={viewIndividualProject}
      />
    </section>
  );
};
