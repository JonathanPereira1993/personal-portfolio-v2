import { useState } from "react";
import BgImage from "./components/BgImage";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

function App() {
  const [darkTheme, setDarkTheme] = useState("lightTheme");

  return (
    <div data-theme={darkTheme} className="bg-colorBGMain">
      <BgImage className={"top-0 left-0 right-0"} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
