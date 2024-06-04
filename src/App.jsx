import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import BgImage from "./components/UI/BgImage";
import { DarkModeContext } from "./context/DarkModeContext";
import About from "./pages/About/About";
import Bookshelf from "./pages/Bookshelf/Bookshelf";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Notebook from "./pages/Notebook/Notebook";
import Techstack from "./pages/TechStack/Techstack";
import Work from "./pages/Work/Work";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const getThemeInStorage = () => {
    return localStorage.getItem("theme");
  };

  useEffect(() => {
    const theme = getThemeInStorage();

    if (theme != undefined && theme === "light") {
      setDarkMode(false);
    } else if (theme != undefined && theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`${darkMode ? "dark" : "light"}`}>
        <div className={"dark:bg-[#0D0D0D] bg-white"}>
          <BgImage
            className={"top-0 left-0 right-0 flex h-auto justify-center"}
          />
          <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Work" element={<Work />} />
                <Route path="/Notebook" element={<Notebook />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Bookshelf" element={<Bookshelf />} />
                <Route path="/Techstack" element={<Techstack />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
