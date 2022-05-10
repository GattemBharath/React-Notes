import React, { useState } from "react";

const InputHook = (val) => {
  const [state, setState] = useState(val);

  const inputHandle = (e) => {
    e.preventDefault();
    setState(e.target.value);
  };

  const clear = () => {
    setState("");
  };

  return [state, inputHandle, clear];
};

export default InputHook;
