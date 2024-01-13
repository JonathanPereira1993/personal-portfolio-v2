import { useState } from "react";
import BgImage from "./components/BgImage";
import Home from "./pages/Home/Home";

function App() {
  const [darkTheme, setDarkTheme] = useState("lightTheme");

  return (
    <div data-theme={darkTheme} className="px-paddingX bg-colorBGMain">
      <BgImage />
      <Home />
    </div>
  );
}

export default App;
