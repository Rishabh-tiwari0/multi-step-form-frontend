import pulley from "../assets/pulley-blob.mp4";
const CompThree = ({ nextStep }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-11/12 max-w-7xl content-center items-center sm:flex-row ">
        <div className="h-96 flex-1 max-w-40 justify-center content-center sm:max-w-80">
          <video autoPlay loop>
            <source src={pulley} />
          </video>
        </div>
        <div className="flex-1 max-w-xl">
          <div>
            <h1 className="text-3xl font-bold	text-center sm:text-start">
              You are in the right place
            </h1>
            <p
              className="text-center mt-3 sm:text-start
            "
            >
              Brilliant gets you hands-on with concepts in math, science, and
              computer science. You'll solve fun problems while growing your
              critical thinking skills.
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

export default CompThree;
