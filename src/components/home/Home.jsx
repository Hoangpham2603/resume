import React from "react";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social className="home__social" />

            <div className="home__img"></div>

            <div className="home__data">
              <Data />
            </div>
          </div>

          <ScrollDown />
        </div>
      </section>
    </main>
  );
};

export default Home;
