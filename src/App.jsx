import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BgImage from "./components/BgImage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Notebook from "./pages/Notebook/Notebook";
import Techstack from "./pages/TechStack/Techstack";
import Work from "./pages/Work/Work";

function App() {
  const [darkTheme, setDarkTheme] = useState("lightTheme");

  return (
    <div data-theme={darkTheme} className="bg-colorBGMain">
      <BgImage className={"top-0 left-0 right-0"} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Notebook" element={<Notebook />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Bookshelf" element={<Bookshelf />} />
          <Route path="/Techstack" element={<Techstack />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
