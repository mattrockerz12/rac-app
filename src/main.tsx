import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "swiper/css/bundle";
import "swiper/css/bundle";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/600-italic.css";
import "@fontsource/josefin-sans/700.css";
import "./assets/css/animate.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/fontello.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
