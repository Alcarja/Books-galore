import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Components/Nav";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
