function ProjectThumbnail({ handleClick, project }) {
  return (
    <button
      onClick={handleClick}
      className="flex h-56 w-full max-w-64 flex-col gap-2 rounded-xl border-stone-200/40 bg-stone-200 bg-opacity-0 p-6 transition duration-150 hover:border-2 hover:bg-opacity-5 active:bg-opacity-10 "
    >
      <div
        className="w-full flex-grow bg-cover bg-center"
        style={{ backgroundImage: `url(${project.imgLink})` }}
      />
      <p className="text-center">{project.name}</p>
    </button>
  );
}

export default ProjectThumbnail;
