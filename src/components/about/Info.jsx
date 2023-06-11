import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">0 years of working.</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__ico"></i>
        <h3 className="about__title">completed</h3>
        <span className="about__subtitle">0 projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__ico"></i>
        <h3 className="about__title">support</h3>
        <span className="about__subtitle">24/7</span>
      </div>
    </div>
  )
}

export default Info