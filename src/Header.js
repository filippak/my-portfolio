import React from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import { Button } from 'reactstrap';
import logo from './icons/FK_logo.svg';

const Header = () => (
  <div className="header">
    <nav className="navbar navbar-default navbar-header navbar-fixed-top">
      <div className="container-fluid header-elems">
        <ul className="list-element-header">
          <Link to='/'> <img className="navbar-left logo-image img-responsive" src={logo} /> </Link>
          <li> <Link to='/contact' ><button className="btn btn-default btn-header">Contact me</button> </Link> </li>
          <li><Link className="nav-link" to='/artwork'>Artwork</Link></li>
          <li><Link className="nav-link" to='/projects'>Projects</Link></li>
          <li><Link className="nav-link" to='/'>About Me</Link></li>
        </ul>
      </div>
    </nav>
  </div>
)

export default Header
