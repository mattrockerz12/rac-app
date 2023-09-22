import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { FooterBottomData, Logo, NavLinksData, TopbarInfos } from "../data";
import { MenuContext } from "../context/menu-context";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const handleMenuClick = (e: React.FormEvent) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <>
      <header className="header_area">
        <div className="container">
          <div className="header_social">
            <ul className="hd_social_icons">
              {FooterBottomData.social.map(({ icon, url }, index) => (
                <li key={`header-social-${index}`}>
                  <a href={url}>
                    <i className={`fa ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header_contact text-end">
            <ul className="hd_contact">
              {TopbarInfos.map(({ icon, tagLine, text, url }, index) => (
                <li key={`header-info-${index}`}>
                  <i className={icon}></i> {tagLine}
                  <a href={url}> {text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div
        className={`main_menu_area ${
          true === sticky
            ? " stricky stricky-fixed slideInDown animated"
            : " stricky slideIn animated"
        }`}
      >
        <div className="container">
          <div className="main_menu_area__left">
            <Link to="/">
              <img src={Logo.dark} alt="Awesome Image" />
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="main_menu_area__right">
            <nav className="main_menu_area__menu">
              <ul className="nav navbar-nav navigation-box">
                {NavLinksData.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={location.pathname == links.url ? "active" : ""}
                    >
                      <Link to={links.url}>{links.name}</Link>
                      {undefined !== links.subItems ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link to={subLinks.url}>{subLinks.name}</Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Link to="/contact" className="btn-yellow">
              BOOK TODAY
            </Link>
          </div>
        </div>
      </div>

      {menuStatus === true ? <MobileMenu /> : null}
    </>
  );
};

export default Header;
