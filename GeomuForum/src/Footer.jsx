import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faDiscord } from "@fortawesome/free-brands-svg-icons";
import './App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Geomu</h3>
          <p>© 2023 Geomu. All rights reserved.</p>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
            <li>
              <a href="#">www.geomu.com</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
