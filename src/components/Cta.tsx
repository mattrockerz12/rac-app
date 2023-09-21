import { Link } from "react-router-dom";
import { CallToActionOneData } from "../data";

const Cta = () => {
  const { title, button } = CallToActionOneData;

  return (
    <section className="call_to_action">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-8 col-xs-12">
            <h1>{title}</h1>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12 text-end cta_responsive_left">
            <Link to={button.url} className="btn-gray">
              {button.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
