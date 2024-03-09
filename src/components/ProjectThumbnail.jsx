import { useEffect, useState } from "react";

function ProjectThumbnail({ handleClick, project }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    import(`${project.imgLink}`).then((imgModule) => {
      setImgSrc(imgModule.default);
    });
  }, [project.imgLink]);

  return (
    <button
      onClick={handleClick}
      className="flex h-56 w-full max-w-52 flex-col gap-2 rounded-xl bg-stone-200 bg-opacity-0 px-3 outline-1 transition duration-150 hover:bg-opacity-5 hover:outline active:bg-opacity-10"
    >
      <img className="m-auto bg-cover bg-center" src={`${imgSrc}`} />
      <p className="text-center">{project.name}</p>
    </button>
  );
}

export default ProjectThumbnail;
