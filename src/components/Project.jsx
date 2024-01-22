import { CiMail } from 'react-icons/ci';

export const Project = ({ testArray, id, handleProjectId }) => {
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
