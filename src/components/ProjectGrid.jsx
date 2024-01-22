import { Project } from '@/components/Project';
import { ProjectCard } from '@/components/ProjectCard';
import { useState } from 'react';

export const testArray = [
  { name: 'nn1', id: 1 },
  { name: 'nn2', id: 2 },
  { name: 'nn3', id: 3 },
  { name: 'nn4', id: 4 },
  { name: 'nn5', id: 5 },
  { name: 'nn6', id: 6 },
];
export const ProjectGrid = () => {
  const [viewIndividualProject, setViewIndividualProject] = useState(null);

  const handleProjectId = (id) => {
    setViewIndividualProject(id);
  };

  console.log(viewIndividualProject);

  return (
    <section className="relative ">
      <div
        className="grid auto-rows-[80px]
        grid-cols-6 gap-4 "
      >
        {testArray.map(({ name, id }) => (
          <Project
            handleProjectId={handleProjectId}
            key={id}
            id={id}
            testArray={name}
          />
        ))}
      </div>

      {viewIndividualProject && (
        <ProjectCard
          handleProjectId={handleProjectId}
          id={viewIndividualProject}
        />
      )}
    </section>
  );
};
