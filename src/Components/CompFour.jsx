import { useState } from "react";
import level1 from "../assets/level1.png";
import level2 from "../assets/level2.png";
import level3 from "../assets/level3.png";
import level4 from "../assets/level4.png";

const CompFour = ({ nextStep }) => {
  const [active, setActive] = useState(null);
  const dataArray = [
    { name: "Arithmetic", level: "Introductory", picture: level1 },
    { name: "Basic Algebra", level: "Foundational", picture: level2 },
    { name: "Intermediate Algebra", level: "Intermediate", picture: level3 },
    { name: "Calculus", level: "Advanced", picture: level4 },
  ];

  return (
    <div className="flex flex-col items-center overflow-auto mt-14 mb-20">
      <h1 className="text-xl font-bold	text-center sm:text-3xl">
        What is your math comfort level?
      </h1>
      <h3 className="mt-3 text-gray-500 font-semibold text-xs text-center sm:text-base">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </h3>
      <div className="flex flex-col mt-10 gap-1 sm:flex-row sm:flex-wrap sm:gap-8">
        {dataArray.map((lvl, index) => {
          return (
            <div
              key={index}
              className={` w-52 h-40 flex flex-col items-center gap-2 content-around pt-2 px-2 py-2 pb-6 m-2 rounded-md cursor-pointer border-2 box-border hover:scale-105 transition-all ease ${
                active === index ? "border-amber-400 shadow-xl" : ""
              }`}
              onClick={() => {
                setActive(index);
              }}
            >
              <img
                src={lvl.picture}
                alt={lvl.name}
                className="box-border max-h-full max-w-44 overflow-clip p-2 h-14"
              />
              <h1 className="font-bold ">{lvl.name}</h1>
              <h3 className="font-semibold text-gray-500">{lvl.level}</h3>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        className={`border pt-2 pb-2 px-8 py-8 mt-8 text-lg rounded-md  font-semibold  ${
          active != null
            ? `text-white bg-black hover:bg-gray-950`
            : `text-gray-400  bg-slate-100 hover:bg-gray-200  border-gray-300 pointer-events-none`
        } `}
        onClick={nextStep}
      >
        Continue
      </button>
    </div>
  );
};

export default CompFour;
