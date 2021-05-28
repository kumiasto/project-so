import React from "react";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Slider from "./components/slider/Slider";
import ColorContextProvider from "./context/ColorContext";

const App = () => {
  return (
    <>
      <ColorContextProvider>
        <Header />
        <Slider />
        <Section />
      </ColorContextProvider>
    </>
  );
};

export default App;
