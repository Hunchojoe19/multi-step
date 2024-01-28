import { TextField } from "@mui/material";
import React from "react";

// const onClick = () => {
//   console.log(value);
// };

const StepOne = () => {
  return (
    <div>
      <div>
        <TextField
          label="Full Name"
          variant="outlined"
          placeholder="Full Name"
          margin="normal"
          color="primary"
          //   value={}
          //   onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Email Address"
          variant="outlined"
          placeholder="Email Address"
          margin="normal"
          color="primary"
        />
      </div>
      <div>
        <TextField
          label="Phone number"
          variant="outlined"
          placeholder="+1 234 567 890"
          margin="normal"
          color="primary"
        />
      </div>
      <div>
        <button className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
