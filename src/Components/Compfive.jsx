import cheers from "../assets/cheerleader-blorb.mp4";

const Compfive = ({ nextStep }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-11/12 max-w-7xl content-center items-center sm:flex-row ">
        <div className="h-96 flex-1 max-w-40 justify-center content-center sm:max-w-80">
          <video autoPlay loop>
            <source src={cheers} />
          </video>
        </div>
        <div className="flex-1 max-w-xl ml-9">
          <div>
            <h1 className="text-3xl font-bold	text-center sm:text-start">
              You’re on your way!
            </h1>
            <div className="text-amber-400 text-4xl text-center sm:text-start">
              ★★★★★
            </div>
            <p className="text-center italic mt-3 sm:text-start">
              “Well-organized, well-explained, well-designed. Brilliant is
              absolutely a good choice if you want to learn or re-learn anything
              objective (math, science, etc.). The lessons are more like
              puzzles, available as courses or individual practice lessons or as
              concepts to understand. If school math looked like this, nobody
              would think "math is hard.”— Joel M.
            </p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className={`border w pt-2 pb-2 px-8 py-8 mt-6 text-lg rounded-md  font-semibold text-white bg-black hover:bg-gray-950 
      `}
        onClick={nextStep}
      >
        Continue
      </button>
    </div>
  );
};

export default Compfive;
