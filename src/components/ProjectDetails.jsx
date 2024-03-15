function ProjectDetails({
  name,
  desc,
  frameworks,
  designer,
  repoLink,
  hrefLink,
  onClick,
}) {
  return (
    <div className="absolute mt-20 flex h-4/6 min-h-fit w-3/12 min-w-96 flex-col place-self-center rounded-lg bg-slate-800 md:translate-x-24 md:translate-y-20">
      <div className="flex h-10 items-center rounded-t-lg bg-slate-900 pl-4 shadow-inner shadow-white/15">
        <i className="fa-solid fa-folder mr-3"></i>
        <p>Project Properties</p>
        <button onClick={onClick} className="ml-auto flex gap-3 p-2 px-5">
          <i className="fa-solid fa-window-minimize"></i>
          <i className="fa-solid fa-window-maximize"></i>
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>
      <div className="mx-10 flex h-5/6 flex-col justify-between pt-5">
        <h3 className="text-center text-4xl font-bold">{name}</h3>
        <p>
          <b>
            <u className="text-green-400">Description:</u>
          </b>{" "}
          {desc}
        </p>
        <p>
          <b>
            <u className="text-green-400">Technologies:</u>
          </b>{" "}
          {frameworks}
        </p>
        <p>
          <b>
            <u className="text-green-400">Designed By:</u>
          </b>{" "}
          {designer}
        </p>
        <div className="flex">
          <a
            href={repoLink}
            onClick={onClick}
            target="_blank"
            className="mx-auto flex w-28 flex-col rounded-xl py-2 text-center transition duration-150 hover:bg-stone-200/25"
          >
            <i className="fa-brands fa-github text-6xl"></i>View Repo
          </a>
          <a
            href={hrefLink}
            onClick={onClick}
            target="_blank"
            className="mx-auto flex w-28 flex-col rounded-xl py-2 text-center transition duration-150 hover:bg-stone-200/25"
          >
            <i className="fa-solid fa-square-up-right text-6xl"></i>Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
