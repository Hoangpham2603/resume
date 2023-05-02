import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HomeTemplates = () => {
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <NavLink to="" className={"nav__link active-link"}>
            <h2 className="nav-name active-link">Hoàng Phạm</h2>
          </NavLink>

          <div className="nav__menu">
            <ul className="nav__list flex">
              <li>
                <NavLink className={"nav__link active-link"}>
                  <i className="uil uil-estate  nav__icon "></i> Home
                </NavLink>
              </li>

              <li>
                <NavLink className={"nav__link "}>
                  <i className="uil uil-user nav__icon  "></i> About
                </NavLink>
              </li>

              <li>
                <NavLink className={"nav__link "}>
                  <i className="uil uil-file-alt nav__icon"></i> Skill
                </NavLink>
              </li>

              <li>
                <NavLink className={"nav__link"}>
                  <i className="uil uil-message nav__icon"></i> Contact
                </NavLink>
              </li>

              <li>
                <NavLink className={"nav__link"}>
                  <i className="uil uil-message nav__icon"></i> Contact
                </NavLink>
              </li>

              <li>
                <NavLink className={"nav__link"}>
                  <i className="uil uil-message nav__icon"></i> Contact
                </NavLink>
              </li>
            </ul>

            <i className="uil uil-times nav__close"></i>
          </div>

          <div className="nav__toggle">
            <i className="uil uil-apps"></i>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
};

export default HomeTemplates;
