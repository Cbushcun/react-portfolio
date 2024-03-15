function ProjectThumbnail({ handleClick, project }) {
  {
    /* Assume 'project' is an object with this structure
    {
      "name": "",
      "desc": "",
      "technologies": "",
      "designer": "",
      "imgLink": "",
      "repoLink": "",
      hrefLink: ""
    }
*/
  }

  return (
    <button
      onClick={handleClick}
      className="flex h-56 w-full max-w-52 flex-col gap-2 rounded-xl bg-stone-200 bg-opacity-0 px-3 outline-1 transition duration-150 hover:bg-opacity-5 hover:outline active:bg-opacity-10"
    >
      <img className="m-auto bg-cover bg-center" src={`${project.imgLink}`} />
      <p className="text-center">{project.name}</p>
    </button>
  );
}

export default ProjectThumbnail;
