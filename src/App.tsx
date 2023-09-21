import "./App.css";
import About from "./components/About";
import Cta from "./components/Cta";
import Feature from "./components/Feature";
import FunFact from "./components/FunFact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Service from "./components/Service";
import Slider from "./components/Slider";
import MenuContextProvider from "./context/menu-context";

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <Slider />
      <Feature />
      <About />
      <Service />
      <Cta />
      <FunFact />
      <Gallery />
    </MenuContextProvider>
  );
}

export default App;
