import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import brandImage from "../assets/images/client-logo.png";

const Sponsor = () => {
  const sponsorCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 5000 },
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4,
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5,
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5,
      },
    },
  };

  return (
    <div className={`clients_logo_area text-center section_padding`}>
      <Container>
        <Swiper {...sponsorCarouselOptions} className="clients_logo ">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={brandImage} alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default Sponsor;
