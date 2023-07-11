import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hoang</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <NavLink
            to="https://github.com/Hoangpham2603"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>asdnsadnbsand
          </NavLink>

          <NavLink
            to="https://github.com/Hoangpham2603"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </NavLink>

          <NavLink
            to="https://github.com/Hoangpham2603"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </NavLink>
        </div>

        <div className="footer__copy">&#169; Copy right.</div>
      </div>
    </footer>
  );
};

export default Footer;
