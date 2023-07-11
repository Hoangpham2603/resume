import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hoang</h1>

        <ul className="footer__list">
          <li>
            <NavLink to="/about" className="footer__link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="footer__link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="footer__link">
              contact
            </NavLink>
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
