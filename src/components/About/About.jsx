import React from "react";
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import './About.css';


const About = () => {
  return (
    <div className="app__about" id="about" >
      <div className="app__about-info">
        <h1 className="app__about-header">Advanced Statistics</h1>
        <p className="app__about-text">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="about__wrapper">
        <div className="app__card" id="brand-recognition">
          <div className="img-holder">
            <img src="https://svgshare.com/i/JNa.svg" alt="" />
          </div>
          <div className="card_content">
            <h1 className="app__card-h1">Brand Recognition</h1>
            <p className="app__about-text">
              Boost your brand recognition with each click.Genric links don't
              mean a thing. Branded links help instil the confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="app__card" id="advance-stats">
          <div className="img-holder">
            <img src="https://svgshare.com/i/JLg.svg" alt="" />
          </div>
          <div className="card_content">
            <h1 className="app__card-h1">Detailed Records</h1>
            <p className="app__about-text">
              Gain insights into who is clicking your link Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="app__card" id="fully-customizable">
          <div className="img-holder">
            <img src="https://svgshare.com/i/JN1.svg" alt="" />
          </div>
          <div className="card_content">
            <h1 className="app__card-h1">Fully Customizable</h1>
            <p className="app__about-text" style={{ fontWeight: "600" }}>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="app__about-line" />
      </div>
    </div>
  );
}


export default About;
