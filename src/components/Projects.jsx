import "./Projects.css";

import Badge from 'react-bootstrap/Badge'
import mongodb from '../images/mongodb.png';
import mysql from '../images/mysql.png';
import react from '../images/react.png';
import nodejs from '../images/nodejs.png';
import flask from '../images/flask.png';
// import docker from '../images/docker.png';
import python from '../images/python.png';
// import postgres from '../images/postgres.png';

const Projects = () => {
  return (
    <div id="projects" className="above-particles jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h1 className="experience-title display-3">projects</h1>

        {/* VibeScript */}
        <a href="https://github.com/hellomusa/vibescript">
          <div className="pt-2 pb-5 row">
            <div className="job-description col-md-9 order-md-0">
              <h3 className="job-heading display-4 pt-3">
                VibeScript <Badge variant="info">cuHacking 2021</Badge>
              </h3>
              <h4 className="text-muted job-subheading display-4">
                January 2021
              </h4>
              <p>Worked in a team of 4 to develop a single-page, pair programming matchmaker web application.</p>
              <div className="logos">
                <img src={react} alt="React.js logo" />
                <img src={nodejs} alt="Node.js logo"/>
                <img src={mongodb} alt="MongoDB logo" />
              </div>
            </div>
          </div>
        </a>

        {/* 2406 Project */}
        {/* <div className="pt-2 pb-5 row">
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">
              Stock Broker
            </h3>
            <h4 className="text-muted job-subheading display-4">
              Web Application
            </h4>
            <h4 className="text-muted job-subheading display-4">
              September - December 2020
            </h4>
            <p>
              COMP 2406 Project (Fundamentals of Web Applications).
              <br />
              Allows users to trade stocks and manage watchlists.
            </p>
            <div className="logos">
              <img src={nodejs} />
              <img src={mongodb} />
            </div>
          </div>
        </div> */}

        {/* cuHacking */}
        <a href="https://github.com/hellomusa/feedback_analyzer">
          <div className="pt-2 pb-5 row">
            <div className="job-description col-md-9 order-md-2">
              <h3 className="job-heading display-4 pt-3">
                RBC Feedback Analyzer <Badge variant="info">cuHacking 2020</Badge>
              </h3>
              <h4 className="text-muted job-subheading display-4">
                January 2020
              </h4>
              <p>Worked in a team of 3 to develop a solution to RBC's Analytics Challenge.</p>
              <div className="logos">
                <img src={python} alt="Python logo" />
                <img src={flask} alt="Flask logo"/>
                <img src={mysql} alt="MySQL logo"/>
            </div>
            </div>
          </div>
        </a>

      </div>
    </div>
  )
}

export default Projects;