import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/Projects.css';

const Projects = () => (
  <div className="Projects">

  <div className="container-fluid projects-container">
  <div className="project-header-text">
    <h2> NRAA </h2>
    <h3>Application for post delivery to update residential information. Mobile view as progressive web app.</h3>
  </div>
    <div className="row project-row">
      <div className="col-md-6 project-description">
      <div className="row info-row">
        <div className="col-md-6 timeline-box">
          <h4> Timeline </h4>
            <h6>Consulting project Feb-May 2018</h6>
        </div>
        <div className="col-md-6">
          <h4> Skills used </h4>
          <h6>React using Redux, Sketch, Swagger</h6>
        </div>
      </div>
      </div>
        <div className="col-md-6">
          <img className="img-responsive project-image" src={require('./icons/nraa-app.png')} />
        </div>
    </div>
  </div>
    <div className="container-fluid projects-container">
    <div className="project-header-text">
      <h2> Sign Along </h2>
      <h3>Connecting the deaf community, event networks and interpretes for a richer live experience.</h3>
    </div>
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <div className="row info-row">
          <div className="col-md-6 timeline-box">
            <h4> Timeline </h4>
              <h6>Group project Jan-March 2017</h6>
          </div>
          <div className="col-md-6">
            <h4> Skills used </h4>
            <h6>Swift, Sketch, User research and testing </h6>
          </div>
        </div>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/sign-along.png')} />
          </div>
      </div>
    </div>

    <div className="container-fluid projects-container">
    <div className="project-header-text">
      <h2> OpenMind </h2>
      <h3>Incentivize diverse news consumption</h3>
    </div>
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <div className="row info-row">
          <div className="col-md-6 timeline-box">
            <h4> Timeline </h4>
              <h6> User reseach project April-June 2017 </h6>
              <h6>Final webapp developed in 2 weeks </h6>
          </div>
          <div className="col-md-6">
            <h4> Skills used </h4>
            <h6>React, Javascript, Sketch</h6>
          </div>
        </div>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/openmind-pitch.png')} />
          </div>
      </div>
    </div>

    <div className="container-fluid projects-container">
    <div className="project-header-text">
      <h2> Checklight </h2>
      <h3>Providing mechanical help for truckers on the road</h3>
    </div>
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <div className="row info-row">
          <div className="col-md-6 timeline-box">
            <h4> Timeline </h4>
              <h6>Starup idea by a friend that I&#39;m helping to implement</h6>
              <h6> Fall 2017 </h6>
          </div>
          <div className="col-md-6">
            <h4> Skills used </h4>
            <h6>React, Javascript, Sketch</h6>
          </div>
        </div>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/checklight.png')} />
          </div>
      </div>
    </div>

    <div className="container-fluid projects-container last-project">
    <div className="project-header-text">
      <h2> Office Pac </h2>
      <h3>Creating a brave space through a shared, interactive display</h3>
    </div>
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <div className="row info-row">
          <div className="col-md-6 timeline-box">
            <h4> Timeline </h4>
              <h6>User research project April - June 2017</h6>
          </div>
          <div className="col-md-6">
            <h4> Skills used </h4>
            <h6>Sketch, User research, Design thinking</h6>
          </div>
        </div>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/office-pac.png')} />
          </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 button-div">
        <Link to='/artwork'> <button className="btn btn-default btn-to-art">View artwork</button> </Link>
        </div>
      </div>
    </div>
  </div>
)

export default Projects;
