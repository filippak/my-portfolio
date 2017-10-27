import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/art.css';

const Art = () => (
  <div className="Art">
  <div className="container-fluid container-artwork">
  <div className="art-description">
    <h2> Cell </h2>
    <h4>The cell grows, ages and splits over the course of time. </h4>
    <h5> Made with processing. </h5>
  </div>
    <div className="row">
      <div className="col-md-6 col-lg-6 art-column">
        <img className="art-image" src={require('./icons/artwork/one-cell.png')} />
      </div>
      <div className="col-md-6 col-lg-6 art-column">
        <img className="art-image" src={require('./icons/artwork/two-cells.png')} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 col-lg-12 art-column">
        <img className="art-image" src={require('./icons/artwork/growing_cell_gif.gif')} />
      </div>
    </div>
    <div className="art-description">
      <h2> Lines </h2>
      <h4>Lines follow semi-random motion. </h4>
      <h5> Made with processing. </h5>
    </div>
      <div className="row">
        <div className="col-md-4 col-lg-4 art-column">
          <img className="art-image" src={require('./icons/artwork/lines-up.png')} />
        </div>
        <div className="col-md-4 col-lg-4 art-column">
          <img className="art-image" src={require('./icons/artwork/lines-side.png')} />
        </div>
        <div className="col-md-4 col-lg-4 art-column">
          <img className="art-image" src={require('./icons/artwork/lines-down.png')} />
        </div>
      </div>
      <div className="art-description">
        <h2> Gradient </h2>
        <h4> Making and changing gradients. </h4>
        <h5> Made with processing. </h5>
      </div>
      <div className="row">
          <div className="col-md-4 col-lg-4 art-column">
            <img className="art-image" src={require('./icons/artwork/gradient_gif.gif')} />
            <img className="art-image" src={require('./icons/artwork/color_gradient_gif.gif')} />
          </div>
          <div className="col-md-8 col-lg-8 art-column">
            <img className="art-image" src={require('./icons/artwork/3_gradients.png')} />
          </div>
      </div>
      <div className="art-description">
        <h2> Fractals </h2>
        <h4> By entering the number of splits a fractal tree is rendered. </h4>
        <h5> Made with processing. </h5>
      </div>
        <div className="row">
          <div className="col-md-4 col-lg-4 art-column">
            <img className="art-image" src={require('./icons/artwork/small-fractal.png')} />
          </div>
          <div className="col-md-4 col-lg-4 art-column">
            <img className="art-image" src={require('./icons/artwork/medium-fractal.png')} />
          </div>
          <div className="col-md-4 col-lg-4 art-column">
            <img className="art-image" src={require('./icons/artwork/large-fractal.png')} />
          </div>
        </div>
      </div>
  </div>
)

export default Art;
