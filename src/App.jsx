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
    <div className="flex flex-col h-screen w-screen items-center">
      <div className={`w-8/12 relative sm:w-10/12 `}>
        <div className="w-full absolute bg-gray-200 h-1 rounded-sm top-4 -z-10"></div>
        <div
          className="absolute h-1 bg-green-500 rounded-sm top-4 transition-all ease-in duration-500 "
          style={{ width: (step / 7) * 100 + "%" }}
        ></div>
        <div
          className="h-1 top-4 absolute font-bold text-3xl text-gray-500 cursor-pointer active:scale-95 active:text-gray-950 -translate-y-5 -translate-x-10 "
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
      </div>

      <div className="flex flex-col  w-full h-screen justify-center items-center">
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
