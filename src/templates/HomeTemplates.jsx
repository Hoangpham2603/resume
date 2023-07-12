import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const HomeTemplates = () => {
  //                      Toggle Menu
  const [toggle, setToggle] = useState(false);

  //                             Main
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <NavLink to="" className={"nav__link active-link"}>
            Hoang Pham
            {/* <h2 className="nav__name active-link">Hoang Pham</h2> */}
          </NavLink>

          <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="home"
                  className={"nav__link active-link"}
                >
                  <i className="uil uil-estate  nav__icon "></i> Home
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="/about"
                  className={"nav__link "}
                >
                  <i className="uil uil-user nav__icon  "></i>{" "}
                  <span>About</span>
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                  to="/skills"
                  className={"nav__link "}
                >
                  <i className="uil uil-file-alt nav__icon"></i> Skill
                </NavLink>
              </li>

              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={"nav__link"}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <i className="uil uil-message nav__icon"></i> Contact
                </NavLink>
              </li>
            </ul>

            {/* the X button on small device */}
            <i
              onClick={() => {
                setToggle(!toggle);
              }}
              className="uil uil-times nav__close"
            ></i>
          </div>

          <div
            className="nav__toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default HomeTemplates;
