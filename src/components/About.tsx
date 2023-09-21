import { Link } from "react-router-dom";
import { AboutOneData } from "../data";

const About = () => {
  const { title, tagLine, content, button } = AboutOneData;

  return (
    <section className="about_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_image about-image__updated"></div>
          </div>
          <div className="col-md-6">
            <div className="about_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{tagLine}</h4>
                <h1>{title}</h1>
              </div>
              <p>{content}</p>
              <Link to={button.url} className="btn-yellow">
                {button.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
