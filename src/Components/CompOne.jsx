import { useState } from "react";
import student from "../assets/student.png";
import professional from "../assets/professional.png";
import teacher from "../assets/teacher.png";
import parent from "../assets/parent.png";
import learner from "../assets/learner.png";
import other from "../assets/other.png";

const CompOne = ({ nextStep }) => {
  const categories = [
    { category: "Student", image: student },
    { category: "Professional", image: professional },
    { category: "Parent", image: parent },
    { category: "Lifelong learner", image: learner },
    { category: "Teacher", image: teacher },
    { category: "Other", image: other },
  ];
  const [active, setActive] = useState(null);
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-bold	">Which describes you the best?</h1>
      <h3 className="mt-3 text-gray-500 font-semibold">
        This will help us personalise your experience.
      </h3>
      <div className="mt-4 flex-col gap-2 flex">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className={`flex gap-4 border-2 rounded-md box-border pt-2 pb-2 px-4 py-4 justify-start items-center cursor-pointer h-11 max-w-lg w-64 transition-all ${
                active === index ? "border-amber-400 " : ""
              } hover:scale-105 
              `}
              onClick={() => {
                setActive(index);
              }}
            >
              <img src={category.image} alt={category} className={`h-4`} />
              <h3 className={`font-semibold text-gray-600`}>
                {category.category}
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

export default CompOne;
