import { useState } from 'react';
import { HomeGrid } from '@/components/HomeGrid';
import { ProjectGrid } from '@/components/ProjectGrid';

export const Home = () => {
  const [viewProjects, setViewProjects] = useState();

  console.log();

  const [pageInView, setPageInView] = useState(false);
  console.log(pageInView);

  const handleViewProjects = () => {
    setViewProjects((viewProjects) => !viewProjects);
  };

  return (
    <section className="page__wrapper overflow-hidden ">
      <HomeGrid handleViewProjects={handleViewProjects} />
      {viewProjects && (
        <>
          <div className="w-full max-w-[600px] self-center border "></div>
          <ProjectGrid />
        </>
      )}
    </section>
  );
};
