import React from "react";
import "./intro.scss";
import Peace from "../../img/peace-memoji-sticker.png";

const Intro = () => {
  return (
    <div className="i" id="intro">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hi there, I'm</h2>
          <h1 className="i-name">Blaine.</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">Git</div>
              <div className="i-title-item">Javascript</div>
              <div className="i-title-item">Node.js</div>
              <div className="i-title-item">Express.js</div>
              <div className="i-title-item">SQL</div>
              <div className="i-title-item">NoSQL / MongoDB</div>
              <div className="i-title-item">React</div>
              <div className="i-title-item">Heroku</div>
            </div>
          </div>
          <p className="i-desc">
            Just a little list of some of the technologies I've used within this
            very portfolio.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Peace} alt="" className="peace" />
      </div>
    </div>
  );
};

export default Intro;
