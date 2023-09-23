import { Swiper, SwiperSlide } from "swiper/react";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "../data";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const Slider = () => {
  const mainSlideOptions: any = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
        {SlideOneData.map(
          ({ backgroundImage, title, text, button, url }, index) => (
            <SwiperSlide key={index}>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext">
                      <span className="subtitle_number">0{index + 1}</span>{" "}
                      {text}
                    </p>
                    <h1 className="main-slider__title">{title}</h1>
                    <div className="slide_button">
                      <Link to={url} className="btn-yellow">
                        {button}
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </section>
  );
};

export default Slider;
