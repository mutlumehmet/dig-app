import React from "react";

interface InputContextInterface {
  isInputEntered: boolean;
}

const InputContext = React.createContext<InputContextInterface>({
  isInputEntered: false,
});

export default InputContext;
