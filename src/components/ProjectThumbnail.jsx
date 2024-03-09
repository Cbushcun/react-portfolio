function ProjectThumbnail({ handleClick, project }) {
  return (
    <button
      onClick={handleClick}
      className="flex h-56 w-full max-w-52 flex-col gap-2 rounded-xl border-stone-200/40 bg-stone-200 bg-opacity-0 px-3 py-6 transition duration-150 hover:border-2 hover:bg-opacity-5 active:bg-opacity-10 "
    >
      <img className="m-auto bg-cover bg-center" src={`${project.imgLink}`} />
      <p className="text-center">{project.name}</p>
    </button>
  );
}

export default ProjectThumbnail;
