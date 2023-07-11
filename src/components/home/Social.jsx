import React from "react";
import { NavLink } from "react-router-dom";

const Social = () => {
  return (
    <div className="home__social">
      <NavLink
        to="https://github.com/Hoangpham2603"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </NavLink>

      <NavLink
        to="https://github.com/Hoangpham2603"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </NavLink>

      <NavLink
        to="https://github.com/Hoangpham2603"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </NavLink>
    </div>
  );
};

export default Social;
