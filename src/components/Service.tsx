import { Link } from "react-router-dom";
import { ServiceOneData } from "../data";

const Service = () => {
  const { title, posts } = ServiceOneData;

  return (
    <section className="service_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-section-title text-center">
              <h1>{title}</h1>
            </div>
          </div>
          {posts.map(({ image, icon, title, text, button }, index) => (
            <div className="col-lg-4 col-md-6" key={`service-one-key-${index}`}>
              <div className="service_box">
                <div className="service_img">
                  <img src={image} alt="service 1" />
                  <div className="icon-box">
                    <i className={icon}></i>
                  </div>
                </div>
                <div className="service_details">
                  <Link to={button.url}>
                    <h2>{title}</h2>
                  </Link>
                  <p>{text}</p>
                  <Link to={button.url} className="btn-yellow">
                    {button.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
