import "./App.css";
import About from "./components/About";
import Feature from "./components/Feature";
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
    </MenuContextProvider>
  );
}

export default App;
