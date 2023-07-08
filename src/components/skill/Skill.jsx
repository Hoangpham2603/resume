import React from "react";
import AboutImg from "../../assets/img/about.JPEG";
import Frontend from "./Frontend";
import OtherSkill from "./OtherSkill";

const Skill = () => {
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <Frontend />

        {/* <OtherSkill /> */}
      </div>
    </div>
  );
};

export default Skill;
