import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/Projects.css';

const Projects = () => (
  <div className="Projects">
    <h1> Projects </h1>
    <div className="container-fluid projects-container">
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <h2> Sign Along </h2>
           <h6>Connecting the deaf community, event networks and interpretes for a richer live experience.</h6>
           <h6>iOS app developed in 10 weeks</h6>
           <h6>Skills Used: Swift, Sketch, User research and testing </h6>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/sign-along.png')} />
          </div>
      </div>
    </div>

    <div className="container-fluid projects-container break-container">
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <h2> OpenMind </h2>
           <h6>Incentivize diverse news consumption </h6>
           <h6>Webapp developed in 2 weeks </h6>
           <h6>Skills Used: React, Javascript, Sketch </h6>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/openmind-pitch.png')} />
          </div>
      </div>
    </div>

    <div className="container-fluid projects-container">
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <h2> Office Pac </h2>
           <h6>Creating a brave space through a shared, interactive display</h6>
           <h6>User research project </h6>
           <h6>Skills Used: User research, Design thinking, Sketch </h6>
        </div>
          <div className="col-md-6 proj-img">
            <img className="img-responsive project-image" src={require('./icons/office-pac.png')} />
          </div>
      </div>
    </div>

    <div className="container-fluid projects-container break-container">
      <div className="row project-row">
        <div className="col-md-6 project-description">
        <h2> Checklight </h2>
           <h6>Providing mechanical help for truckers on the road </h6>
           <h6>Startup idea by a friend that Im helping to implement </h6>
           <h6>Skills Used: React, Javascript, Sketch </h6>
        </div>
          <div className="col-md-6">
            <img className="img-responsive project-image" src={require('./icons/checklight.png')} />
          </div>
      </div>
    </div>
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 button-div">
      <Link to='/artwork'> <button className="btn btn-default btn-to-projects">View artwork</button> </Link>
      </div>
    </div>
    </div>

  </div>
)

export default Projects;
