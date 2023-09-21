import "./App.css";
import Feature from "./components/Feature";
import Header from "./components/Header";
import Slider from "./components/Slider";
import MenuContextProvider from "./context/menu-context";

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <Slider />
      <Feature />
    </MenuContextProvider>
  );
}

export default App;
