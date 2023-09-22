import { useState } from "react";
import { FunfactOneData } from "../data";
import { Col, Container, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

const FunFact = () => {
  //const countUpRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { shapeImage, title, posts } = FunfactOneData;

  const [counter, setCounter] = useState({
    startCounter: false,
  });

  const onVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };

  return (
    <section className="counterup_area text-center section_padding">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>{title}</h1>
            </div>
          </Col>
          {posts.map(({ count, text }, index) => (
            <div className="col-lg-4 col-md-6" key={`funfact-one-key-${index}`}>
              <div className="counter_box">
                <div className="number_img_shape">
                  <img
                    src={shapeImage}
                    alt="Shape"
                    style={{ height: "auto", maxWidth: "100%" }}
                  />
                </div>
                <div className="counter">
                  <ReactVisibilitySensor
                    offset={{ top: 10 }}
                    delayedCall={true}
                    onChange={onVisibilityChange}
                  >
                    <CountUp
                      start={0}
                      end={counter.startCounter ? count : 0}
                      duration={2}
                    />
                  </ReactVisibilitySensor>
                </div>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FunFact;
