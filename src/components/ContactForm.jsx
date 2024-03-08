function ContactForm() {
  return (
    <form action="" className="font-inconsolata flex max-w-lg flex-col gap-5">
      <div className="max-w-fit place-self-center border-b-2 border-green-400 px-5 pb-3 text-center">
        <h1 className="text-5xl font-semibold">Contact Me</h1>
        <div className="flex justify-center gap-5">
          <div>
            <a href="https://www.linkedin.com/in/chrisbushcun/">
              <i className="fa-brands fa-linkedin"></i> /chrisbushcun
            </a>
          </div>
          <div>
            <a
              href="mailto:chrizztianbush@gmail.com?subject=I'm%20interested%20in%20connecting!&body=-Via%20your%20portfolio%20webpage"
              target="_blank"
            >
              <i className="fa-solid fa-envelope"></i> chrizztianbush@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label>Name: </label>
        <input
          type="text"
          className="rounded-sm border-green-400 bg-stone-800 p-1 shadow-inner shadow-white/5 transition duration-150 hover:bg-stone-700/10 focus:border-b-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Email: </label>
        <input
          type="text"
          className="rounded-sm border-green-400 bg-stone-800 p-1 shadow-inner shadow-white/5 transition duration-150 hover:bg-stone-700/10 focus:border-b-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label>Message:</label>
        <textarea
          type="text"
          rows="6"
          className="rounded-sm border-green-400 bg-stone-800 p-1 shadow-inner shadow-white/5 transition duration-150 hover:bg-stone-700/10 focus:border-b-2 focus:outline-none"
        />
      </div>
    </form>
  );
}

export default ContactForm;
