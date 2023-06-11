import React from 'react'
import AboutImg from "../../assets/img/about.jpg" 

const Skill = () => {
  return (
    <div className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <img src={AboutImg} alt="" className='about__img'/>

        <div className="about__data">
          <Info />
        </div>
      </div>
    </div>
  )
}

export default Skill