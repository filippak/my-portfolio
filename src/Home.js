import React from 'react'
import './style/Home.css';
import edu from './icons/hat.svg';
import des from './icons/art.svg';
import bg from './icons/globe.svg';
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="Home">
    <div className="container-fluid header-container">

    <img id="bg-truck" className="header-image img-responsive" src={require('./icons/portfolio-bg.jpg')} />
      <div className="overlay">
        <div className="overlay-textbox">
          <h2 className="overlay-text"> Looking for someone who is passionate about both design and development? </h2>
          <h1 className="hello" >Hello, its me. </h1>
          <Link to='/'> <button className="btn btn-default btn-sign">Contact</button> </Link>
        </div>
      </div>
    </div>
    <div className="container-fluid about-me-new">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <img className="" src={edu} />
        </div>
        <div className="col-md-4 col-sm-12">
          <img className="" src={des} />
        </div>
        <div className="col-md-4 col-sm-12">
          <img className="" src={bg} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 about-me-text">
          <h2>Education</h2>
          <h6>BSc. Computer Science, Stanford Univerity, 2017 </h6>
          <h6>High School in Stockholm, Sweden, 2012 </h6>
        </div>
        <div className="col-md-4 about-me-text">
          <h2> Experience </h2>
          <h6>Knowledge in Sketch, Illustrator and various prototyping tools.</h6>
          <h6>Educational and professional experience with UI/UX design.</h6>
        </div>
        <div className="col-md-4 about-me-text">
          <h2> Why me? </h2>
          <h6>With one foot in design and one in development I have a deep understanding of what building a successful product entails.</h6>
          <h6>With one foot in Sweden and one in Silicon Valley I would be an asset for a global company.</h6>
        </div>
      </div>

          <div className="row">
            <div className="col-md-12 button-div">
            <Link to='/projects'> <button className="btn btn-default btn-to-projects">View projects</button> </Link>
            </div>
          </div>
      </div>
  </div>
)

export default Home
