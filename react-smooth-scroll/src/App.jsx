import React from "react";
import { Navbar } from "./components/Navbar";
import Section1 from "./views/Section1";
import Section2 from "./views/Section2";
import Section3 from "./views/Section3";

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default App;
