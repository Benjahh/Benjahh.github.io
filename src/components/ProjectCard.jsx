import { testArray } from '@/components/ProjectGrid';

export const ProjectCard = ({ id, handleProjectId }) => {
  console.log(id);
  const toView = testArray.find((project) => project.id == id);
  const { name } = toView;
  console.log(name);

  return (
    <article
      className="text-white absolute w-full h-full
     top-0 flex flex-col  bg-secondAccent "
    >
      <div>{name}aaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
      <div className="w-10 h-11 " onClick={() => handleProjectId(null)}>
        CLOSE
      </div>
    </article>
  );
};
