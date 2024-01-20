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
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
    <div className={`${darkMode && "dark"}`}>
      <div className={"dark:bg-[#0D0D0D] bg-white"}>
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
    </div>
    </DarkModeContext.Provider>
  );
}

export default App;
