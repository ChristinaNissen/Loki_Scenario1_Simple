import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>LEGAL</h4>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
          <li>Accessibility Statement</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SUPPORT</h4>
        <ul>
          <li>Report a Problem</li>
          <li>Contact Support</li>
          <li>FAQ</li>
          <li>Help Center</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>ABOUT</h4>
        <ul>
          <li>About the Election</li>
          <li>Security Measures</li>
          <li>Voting Process</li>
          <li>Accessibility</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CONTACT</h4>
        <ul>
          <li>National Election Commission</li>
          <li>Christiansborg 1<br/>1218 Copenhagen K<br/>Denmark</li>
          <li>Phone: +45 00 00 00 00</li>
          <li>contact@election.gov.dk</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Coat_of_Arms_of_Denmark.svg"
          alt="Agency Logo"
        />
        <span>AGENCY FOR ONLINE VOTING</span>
        <span className="footer-portal">Official Danish Election Portal</span>
      </div>
      <div className="footer-copyright">
        © 2025 National Election Commission. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;