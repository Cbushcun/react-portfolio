import "./ScrollingSkills.css";
import { useEffect } from "react";

function ScrollingSkills() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // sets scrolling animation for the list in component
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true); // add if for reduce motion implement
      const scrollerInner = scroller.querySelector(".scroller_inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        //Duplicates to give infinite effect, aria-hidden for screen reader friendliness
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }, []);

  return (
    <div className="scroller">
      <ul className="scroller_inner">
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Tailwind
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Linux
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Vite
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Object-Oriented Programming
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          GitHub
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Office
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Teams
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Azure
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Customer Support
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Conflict Resolution
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Risk Mitigation
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Attentiveness
        </li>
        <li className="min-w-fit rounded-3xl bg-stone-700 px-3 py-2 shadow-lg shadow-black">
          Detail Oriented
        </li>
      </ul>
    </div>
  );
}

export default ScrollingSkills;
