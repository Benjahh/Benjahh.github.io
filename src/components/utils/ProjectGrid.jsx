import { IndividualProjectCard } from '@/components/cards/IndividualProjectCard';
import { useState } from 'react';

const Project = ({ testArray, id, handleProjectId }) => {
  return (
    <div
      className={`
       rounded-xl border-2  text-thirdAccent justify-center
        bg-firstAccent hover:brightness-75 border-fourthAccent p-4  
        ${id == 1 && 'row-span-2 col-span-4'}
        ${id == 2 && 'row-span-4 col-span-2'}
        ${id == 3 && 'row-span-2 col-span-2'}
        ${id == 4 && 'row-span-4 col-span-2'}
        ${id == 5 && 'row-span-2 col-span-2'}
        ${id == 6 && 'row-span-2 col-span-2 '}
        `}
      onClick={() => handleProjectId(id)}
    >
      {testArray}
    </div>
  );
};

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
    <section className="relative  ">
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
        <IndividualProjectCard
          handleProjectId={handleProjectId}
          id={viewIndividualProject}
        />
      )}
    </section>
  );
};
