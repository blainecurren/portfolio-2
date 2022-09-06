import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Welcome to my,</h2>
          <h1 className="i-name">Portfolio.</h1>
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
            These are just some of the technologies I've used in the projects
            within my portfolio.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
