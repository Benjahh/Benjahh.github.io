import { useState } from 'react';
import { HomeGrid } from '@/components/utils/HomeGrid';
import { ProjectGrid } from '@/components/utils/ProjectGrid';

export const Home = () => {
  const [viewProjects, setViewProjects] = useState();

  console.log();

  const [pageInView, setPageInView] = useState(false);
  console.log(pageInView);

  const handleViewProjects = () => {
    setViewProjects((viewProjects) => !viewProjects);
  };

  return (
    <section className="page__wrapper overflow-visible ">
      <HomeGrid handleViewProjects={handleViewProjects} />
      {viewProjects && (
        <div className="relative">
          <ProjectGrid />
        </div>
      )}
    </section>
  );
};
