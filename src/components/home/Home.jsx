import React from "react";
// import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import About from "../about/About";
import Skill from "../skill/Skill";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Service from "../service/Service";
import Work from "../Work/Work";

const Home = () => {
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social />

            <div className="home__img"></div>

            <div className="home__data">
              <Data />
            </div>
          </div>

          <ScrollDown />
        </div>
      </section>

      <section>
        <About />
      </section>

      <Skill />

      <Service />

      <Work />

      <Contact />

      <Footer />
    </main>
  );
};

export default Home;
