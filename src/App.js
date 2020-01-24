import React from "react";
import { Header } from "./components/Header";
import "./App.css";
import { Introduction } from "./components/Introduction";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
