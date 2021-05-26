import React from "react";
import Header from "./components/header/Header";
import Section from "./components/section/Section";
import Slider from "./components/slider/Slider";
import ColorContextProvider from "./context/ColorContext";
import GlobalStyle from "./styled/GlobalStyle";

const App = () => {
  return (
    <>
      <ColorContextProvider>
        <GlobalStyle />
        <Header />
        <Slider />
        <Section />
      </ColorContextProvider>
    </>
  );
};

export default App;
