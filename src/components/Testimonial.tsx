import { useState } from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay, Thumbs, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialOneData } from "../data";
SwiperCore.use([Autoplay, Thumbs, Navigation]);

const Testimonial = () => {
  const { title, posts } = TestimonialOneData;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const testimonialsThumbOptions = {
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000,
    },
  };
  const testimonialsOptions = {
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    navigation: {
      nextEl: "#testi-slide-next",
      prevEl: "#testi-slide-prev",
    },
    autoplay: {
      delay: 5000,
    },
  };

  return (
    <section className="testimonial_area text-center section_padding">
      <h1 className="testimonial_heading_shape">{title}</h1>
      <Container>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          {posts.map(({ image, name }, index) => (
            <SwiperSlide key={index}>
              <div className="testi-thumb-img">
                <img
                  src={image}
                  alt={name}
                  style={{
                    display: "block",

                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          className="testimonial_slider "
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          {posts.map(({ designation, name, content }, index) => (
            <SwiperSlide key={index} className="testimonial_details">
              <p>{content}</p>
              <h4>{name}</h4>
              <span>{designation}</span>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev" id="testi-slide-prev">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="swiper-button-next" id="testi-slide-next">
            <i className="fa fa-angle-right"></i>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default Testimonial;
