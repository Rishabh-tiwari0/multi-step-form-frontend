import { useState, useEffect } from "react";

const Compsix = ({ nextStep }) => {
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [active, setActive] = useState(null);

  const math_courses = [
    {
      course_name: "Foundational Math",
      description:
        "This course covers fundamental concepts such as arithmetic, algebra, geometry, and basic calculus, providing a solid groundwork for further mathematical study.",
      cover_image_url:
        "https://i.pinimg.com/736x/dc/2c/48/dc2c482294100808cced408abb9cdf7d.jpg",
    },
    {
      course_name: "Mathematical Thinking",
      description:
        "Focused on developing problem-solving skills and critical thinking abilities, this course emphasizes logical reasoning, proof techniques, and creative approaches to mathematical problems.",
      cover_image_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ90nhA-RLAsoMiDONMcEDlxeCRPbG6OmkCIZ3eTo-g4g&s",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondSection(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showSecondSection ? (
        <>
          <div className="w-16 h-16 bg-amber-400 flex justify-center items-center rounded-full animate-spin">
            <div className="w-12 h-14 bg-white rounded-full"></div>
          </div>
          <h1 className="text-xl font-bold mt-8 text-gray-600 max-w-lg text-center">{`Finding learning path recommendation for you based on you responses.`}</h1>
        </>
      ) : (
        <section className="flex flex-col items-center">
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl font-bold	">
              Learning paths based on your answers
            </h1>
            <h3 className="mt-3 text-gray-500 font-semibold">
              Choose one to get started. You can Switch anytime.
            </h3>
          </div>
          <div className="w-screen flex gap-7 justify-center mt-10">
            {math_courses.map((course, index) => {
              return (
                <div
                  key={index}
                  className={`transition-all ease cursor-pointer flex justify-around items-center border-2 box-border p-3 rounded-md h-40 overflow-hidden hover:scale-105 hover:shadow-md ${
                    active === index ? "border-amber-400 shadow-xl" : ""
                  }`}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <div className="w-40">
                    <span className="text-sm  font-bold">
                      {course.course_name}
                    </span>
                    <div className="text-sm overflow-hidden h-24">
                      {course.description}
                    </div>
                  </div>
                  <img
                    src={course.cover_image_url}
                    alt={course.course_name}
                    className=" flex-1 h-28 w-52"
                  />
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
        </section>
      )}
    </>
  );
};

export default Compsix;
