import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setStep,
  saveUser,
  clearState,
} from "./../redux/inputSlice/inputSlice";

const PreviewPage = () => {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state);
  // console.log(input, "input");
  const [addOns] = useState(Object.values(input.selectedAddOns));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveUser(input));
    dispatch(clearState());
    dispatch(setStep(1));
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div className="mt-8 lg:bg-gray-200 lg:w-[70%] lg:h-[100%] lg:rounded-lg lg:p-4">
        <h1 className="text-2xl font-bold text-center text-blue-500 md:text-3xl lg:text-4xl ">
          Confirm Your Order
        </h1>
        <div className="flex flex-col justify-center  gap-2 mt-6 md:flex-row md:gap-8 lg:flex-col lg:gap-2 lg:mt-6">
          <p className="text-base md:text-base lg:text-3xl ">
            {input.userDetails.name}
          </p>
          <p className="text-base md:text-base lg:text-xl capitalize">
            {input.userDetails.email}
          </p>
          <p className="text-base md:text-base lg:text-xl">
            {input.userDetails.phone}
          </p>
        </div>
        <div className="w-[100%] h-[2px] bg-gray-400 mt-8" />
        <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-8 lg:flex-col lg:gap-2 lg:mt-6">
          <p className="text-base text-left md:text-base lg:text-xl capitalize">
            Plan: {input.selectedPlan}
          </p>
          <p className="text-base text-left md:text-base lg:text-xl capitalize">
            Type: {input.selectedTypes}
          </p>

          <p className="text-base text-left md:text-base lg:text-xl">
            {" "}
            Add Ons:
          </p>
          {addOns.map((addOn, i) =>
            addOn.selected === true ? (
              <div key={i} className="flex flex-col">
                <ol type="a" className="flex items-center justify-between">
                  <li className="text-base text-left md:text-base lg:text-xl">
                    {i + 1}.&nbsp;{addOn.name}&nbsp;{`+$${addOn.price} extra`}
                  </li>
                </ol>
              </div>
            ) : null
          )}
        </div>
        <div className="w-[100%] h-[2px] bg-gray-400 mt-8" />
        <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-8 lg:flex-col lg:gap-2 lg:mt-6">
          <p className="text-base text-left md:text-base lg:text-xl">
            Total: {`$${input.total}`}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-6 md:flex-row md:gap-8">
        <button
          className="text-center mt-6 p-2 w-[200px] bg-green-500 text-white text-sm rounded-lg"
          onClick={() => dispatch(setStep(3))}
        >
          Back
        </button>
        <button
          className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
