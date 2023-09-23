import { useEffect, useState } from "react";
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
import { Link as ScrollLink } from "react-scroll";
import Testimonial from "./components/Testimonial";
import Sponsor from "./components/Sponsor";
import CtaTwo from "./components/CtaTwo";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [scrollTop, setScrollTop] = useState(false);

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  return (
    <>
      <MenuContextProvider>
        <div id="wrapper">
          <Header />
          <Slider />
          <Feature />
          <About />
          <Service />
          <Cta />
          <FunFact />
          <Gallery />
          <Testimonial />
          <Sponsor />
          <CtaTwo />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </MenuContextProvider>
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top scroll-to-target"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </>
  );
}

export default App;
