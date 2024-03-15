import { useState } from "react";

// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

function ContactForm() {
  // web3form code for form submission
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  const { register, reset, handleSubmit } = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Portfolio Inquiry",
      subject: "New message from your portfolio!",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setResult(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setResult(msg);
    },
  });
  // end form submission code

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="flex max-w-lg flex-col gap-5"
    >
      <div className="max-w-fit place-self-center border-b-2 border-green-400 px-5 pb-3 text-center">
        <h1 className="text-5xl font-semibold">Contact Me</h1>
        <div className="flex justify-center gap-5">
          <div>
            <a href="https://www.linkedin.com/in/chrisbushcun/" target="_blank">
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
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
          className="rounded-sm border-green-400 bg-stone-800 p-1 shadow-inner shadow-white/5 transition duration-150 hover:bg-stone-700/10 focus:border-b-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: true })}
          className="rounded-sm border-green-400 bg-stone-800 p-1 shadow-inner shadow-white/5 transition duration-150 hover:bg-stone-700/10 focus:border-b-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          id="message"
          {...register("message", { required: true })}
          rows="6"
          className="rounded-sm border-green-400 bg-stone-800 p-1 shadow-inner shadow-white/5 transition duration-150 hover:bg-stone-700/10 focus:border-b-2 focus:outline-none"
        />
        <button
          type="submit"
          className="slide slide-down mt-2 w-full rounded-sm bg-green-400 text-3xl font-bold text-stone-800 transition duration-200 hover:scale-105"
        >
          SEND
        </button>
        <div>{result}</div>
      </div>
    </form>
  );
}

export default ContactForm;
