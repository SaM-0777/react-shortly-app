import React from 'react';
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
import { GrFacebook } from 'react-icons/gr';
import './Footer.css';


const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer_container">
        <div className="app__footer-brand app__footer_col">
          <a href="/">
            <h1 className="app__footer-brand_h1">Shortly</h1>
          </a>
        </div>
        <div className="app__footer-features app__footer_col">
          <div className="app__footer-subheading">
            <a href="#about">
              <h2 className="app__footer-h2">Features</h2>
            </a>
          </div>
          <ul className="app__footer-list">
            <li className="app__footer-list_item">Link Shortening</li>
            <li className="app__footer-list_item">Branded Links</li>
            <li className="app__footer-list_item">Link Analytics</li>
          </ul>
        </div>
        <div className="app__footer-resources app__footer_col">
          <div className="app__footer-subheading">
            <a href="#about">
              <h2 className="app__footer-h2">Resources</h2>
            </a>
          </div>
          <ul className="app__footer-list">
            <li className="app__footer-list_item">Blogs</li>
            <li className="app__footer-list_item">Developers</li>
            <li className="app__footer-list_item">Support</li>
          </ul>
        </div>
        <div className="app__footer-company app__footer_col">
          <div className="app__footer-subheading">
            <a href="#company">
              <h2 className="app__footer-h2">Company</h2>
            </a>
          </div>
          <ul className="app__footer-list">
            <li className="app__footer-list_item">About</li>
            <li className="app__footer-list_item">Our Team</li>
            <li className="app__footer-list_item">Careers</li>
            <li className="app__footer-list_item">Contact</li>
          </ul>
        </div>
        <div className="app__footer-social_medial app__footer_col">
          <ul className="app__footer-list footer__social-media_links">
            <li className="app__footer-list_item footer__social-medial_list-item">
              <GrFacebook />
            </li>
            <li className="app__footer-list_item footer__social-medial_list-item">
              <BsTwitter />
            </li>
            <li className="app__footer-list_item footer__social-medial_list-item">
              <BsPinterest />
            </li>
            <li className="app__footer-list_item footer__social-medial_list-item">
              <BsInstagram />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Footer;
