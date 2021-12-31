import React from 'react';

interface InputContextInterface {
    isInputChanged: boolean;
}

const InputContext = React.createContext<InputContextInterface>({
    isInputChanged: false
});

export default InputContext;