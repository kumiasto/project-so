import React, { useState, createContext } from "react";

export const ColorContext = createContext();

const ColorContextProvider = (props) => {
  const [black, setBlack] = useState(false);

  return (
    <ColorContext.Provider value={{ black, setBlack }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
