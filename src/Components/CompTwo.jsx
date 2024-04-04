import { useState } from "react";

const CompTwo = ({ nextStep }) => {
  const [active, setActive] = useState(null);

  const reasonsOfvisit = [
    {
      reason: "Learning specific skills to advance my career.",
      emoticon: "📈",
    },
    { reason: "Exploring new topics I am interested in.", emoticon: "⚽" },
    { reason: "Refreshing my math foundations.", emoticon: "📐" },
    { reason: "Exercising my brains to stay sharp.", emoticon: "🎯" },
    { reason: "Something else.", emoticon: "👀" },
  ];
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-xl font-bold text-center sm:text-3xl">
        Which are you most intrested in?
      </h1>
      <h3 className="mt-3 text-gray-500 font-semibold text-center text-xs sm:text-base">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </h3>
      <div className="mt-4 flex-col gap-2 flex items-center w-9/12">
        {reasonsOfvisit.map((reason, index) => {
          return (
            <div
              key={index}
              className={`w-full flex gap-8 transition-all p-3 items-center border-2 rounded-md cursor-pointer hover:scale-105 sm:max-w-full ${
                active === index ? `border-amber-400  ` : ""
              }`}
              onClick={() => {
                setActive(index);
              }}
            >
              <span>{reason.emoticon}</span>
              <h3
                className={`font-semibold text-gray-600 text-xs sm:text-base`}
              >
                {reason.reason}
              </h3>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className={`border pt-2 pb-2 px-8 py-8 mt-6 text-lg rounded-md  font-semibold  ${
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

export default CompTwo;
