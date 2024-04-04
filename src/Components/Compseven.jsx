const Compseven = ({ setStep }) => {
  return (
    <>
      <h1 className="text-3xl font-bold	mb-11 text-center">
        YOU HAVE REACHED THE END.
      </h1>
      <button
        type="button"
        className={`border w pt-2 pb-2 px-8 py-8 mt-6 text-lg rounded-md  font-semibold text-white bg-black hover:bg-gray-950 
          `}
        onClick={() => {
          setStep(1);
        }}
      >
        Go To Start
      </button>
    </>
  );
};

export default Compseven;
