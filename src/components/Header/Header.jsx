import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">More than just shorter links</h1>
        <p className="p__opensans" style={{ margin: "1.5rem 0" }}>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <a href='#search' className="custom__button">
          Get Started
        </a>
      </div>
      <div className="app__wrapper_img">
        <img src="https://svgshare.com/i/JMW.svg" alt="" />
      </div>
    </div>
  );
}


export default Header;
