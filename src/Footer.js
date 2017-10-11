import React from 'react';
import { Link } from 'react-router-dom';
import './style/Footer.css';

const Footer = () => (
  <footer>
    <nav className="navbar navbar-footer navbar-toggleable-md bg-faded">
      <div className="container-fluid">

        <ul className="list-element-footer">
          <li><a className="footer-link" href="./icons/filippa_resume.pdf" download> Download resume </a></li>
          <li><a className="footer-link" href="https://github.com/filippak" target="_blank"> GitHub</a></li>
          <li><a className="footer-link" href="https://www.linkedin.com/in/filippa-k%C3%A4rrfelt-29067865/" target="_blank"> LinkedIn</a></li>
        </ul>
      </div>
    </nav>
  </footer>
)

export default Footer
