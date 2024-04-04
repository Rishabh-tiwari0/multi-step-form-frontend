import { useState } from "react";
import CompOne from "./Components/CompOne";
import CompTwo from "./Components/CompTwo";
import CompThree from "./Components/CompThree";
import CompFour from "./Components/CompFour";
import Compfive from "./Components/Compfive";
import Compsix from "./Components/Compsix";
import Compseven from "./Components/Compseven";

const App = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="flex h-screen flex-wrap justify-center items-center relative">
      <div
        className=" h-1 w-5 absolute top-14 left-16 content-center m-0 font-bold text-3xl -translate-y-1 text-gray-500 cursor-pointer active:scale-95 active:text-gray-950"
        onClick={() => {
          if (step === 1) {
            setStep(1);
          } else {
            setStep(step - 1);
          }
        }}
      >
        ⇠
      </div>
      <div
        className="h-1 bg-green-500 absolute top-14 left-28 rounded-sm max-w-screen-xl transition-all ease-in duration-500"
        style={{ width: (step / 8) * 100 + "%" }}
      ></div>
      <div className="w-10/12 h-1 bg-gray-200 absolute top-14 -z-10 left-28 max-w-screen-xl rounded-sm "></div>
      <div className="flex flex-col items-center">
        {step === 1 && <CompOne nextStep={nextStep} />}
        {step === 2 && <CompTwo nextStep={nextStep} />}
        {step === 3 && <CompThree nextStep={nextStep} />}
        {step === 4 && <CompFour nextStep={nextStep} />}
        {step === 5 && <Compfive nextStep={nextStep} />}
        {step === 6 && <Compsix nextStep={nextStep} />}
        {step === 7 && <Compseven setStep={setStep} />}
      </div>
    </div>
  );
};

export default App;
