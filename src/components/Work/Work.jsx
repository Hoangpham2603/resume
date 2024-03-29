import React from "react";
import WorksList from "./WorksList";

const Work = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <WorksList />
    </section>
  );
};

export default Work;
