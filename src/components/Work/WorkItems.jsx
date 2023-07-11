import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <a
        href="https://hoangpham2603.github.io/Natours-landingpage/"
        className="work__button"
        target="_blank"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
