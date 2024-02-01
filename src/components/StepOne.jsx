import { TextField } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserDetails, setStep } from "../redux/inputSlice/inputSlice";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/im;

const StepOne = () => {
  const { userDetails } = useSelector((state) => state.input);

  const dispatch = useDispatch();

  // const disabled = Boolean(!)
  const userRef = useRef();

  const [validMail, setValidMail] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [validName, setValidName] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidMail(emailRegex.test(userDetails?.email));
  }, [userDetails?.email]);
  useEffect(() => {
    setValidPhone(phoneRegex.test(userDetails?.phone));
  }, [userDetails?.phone]);
  useEffect(() => {
    setValidName(userDetails?.name?.length > 0);
  }, [userDetails?.name]);
  useEffect(() => {
    setValid(validMail && validPhone && validName);
  }, [validMail, validPhone, validName]);

  useEffect(() => {
    setErrMsg("");
  }, [userDetails?.email, userDetails?.phone, userDetails?.name]);

  const onClick = () => {
    dispatch(setStep(2));
  };
  return (
    <div>
      <div>
        <TextField
          label="Full Name"
          name="fullName"
          variant="outlined"
          placeholder="Full Name"
          margin="normal"
          color="primary"
          required
          error={!validName && nameFocus}
          inputRef={userRef}
          autoFocus={true}
          onFocus={() => setNameFocus(true)}
          onBlur={() => setNameFocus(false)}
          value={userDetails.name}
          helperText={"Please enter your full name"}
          // onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })"}
          onChange={(e) =>
            dispatch(setUserDetails({ ...userDetails, name: e.target.value }))
          }
        />
      </div>
      <div>
        <TextField
          label="Email Address"
          name="email"
          variant="outlined"
          placeholder="Email Address"
          margin="normal"
          color="primary"
          type="email"
          error={!validMail && userFocus}
          inputRef={userRef}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          helperText={"Please enter a valid email address"}
          required
          value={userDetails.email}
          onChange={(e) =>
            dispatch(setUserDetails({ ...userDetails, email: e.target.value }))
          }
        />
      </div>
      <div>
        <TextField
          label="Phone number"
          name="phone"
          variant="outlined"
          type="tel"
          error={!validPhone && phoneFocus}
          onFocus={() => setPhoneFocus(true)}
          onBlur={() => setPhoneFocus(false)}
          helperText={"Please enter a valid phone number"}
          required
          placeholder="+1 234 567 890"
          margin="normal"
          color="primary"
          value={userDetails.phone}
          onChange={(e) =>
            dispatch(setUserDetails({ ...userDetails, phone: e.target.value }))
          }
        />
      </div>
      <div>
        <button
          className="text-center mt-6 p-2 w-[200px] bg-blue-500 text-white text-sm rounded-lg disabled:opacity-25"
          disabled={!valid}
          onClick={onClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepOne;
