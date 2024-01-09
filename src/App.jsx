import Navigation from "./routes/Navigation";
import Clients from "./sections/Clients";
import Home from "./sections/Home";
import Skills from "./sections/Skills";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Clients />
      <Skills />
    </div>
  );
}

export default App;
