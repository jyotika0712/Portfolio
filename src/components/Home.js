import React from 'react';
import './Home.css';
import Images from './MyPic.jpg';


function Home() {
  return (
    <div className="home-section d-flex align-items-center" id="home">
      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-md-6 text-start">
            <h1>Hi, I'm <span className="highlight">Jyotika Chourasia</span></h1>
            <p>B.Tech Undergratuate student passionate about creating innovative web solutions</p>
            <div className="mt-4">
              <button className="btn btn-warning me-2">View My Work</button>
              <button className="btn btn-outline-light">Get In Touch</button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={Images} alt="React Logo" className="react-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;