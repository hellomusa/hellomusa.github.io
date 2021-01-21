import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="above-particles jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h1 className="experience-title display-3">Projects</h1>

        {/* Invoice Manager */}
        <div className="pt-2 pb-5 row">
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">Invoice Manager</h3>
            <h4 className="text-muted job-subheading display-4">
              Web Application
            </h4>
            <h4 className="text-muted job-subheading display-4">
              January 2021 - Present
            </h4>
            <strong style={{color: "purple"}}>Flask, React, PostgreSQL, Docker</strong>
            <p>Building a dockerized platform to create and manage company invoices.</p>
            <a href="https://github.com/hellomusa/Invoice-Generator">View GitHub Repo</a>
          </div>
        </div>

        {/* 2406 Project */}
        <div className="pt-2 pb-5 row">
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
            <strong style={{color: "purple"}}>Node.js, Express.js, MongoDB</strong>
            <p>
              COMP 2406 Project (Fundamentals of Web Applications).
              <br />
              Allows users to trade stocks and manage watchlists.
            </p>
          </div>
        </div>


        {/* cuHacking */}
        <div className="pt-2 pb-5 row">
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">
              cuHacking 2020
            </h3>
            <h4 className="text-muted job-subheading display-4">
              Web Application
            </h4>
            <h4 className="text-muted job-subheading display-4">
              January 2020
            </h4>
            <strong style={{color: "purple"}}>Flask, NLTK, MySQL</strong>
            <p>
              RBC Analytics Challenge.
              <br />
              Created a Flask application to scan and analyze customer feedback.
              <br />
              Used Tweepy to access Twitter API.
            </p>
            <a href="https://github.com/hellomusa/feedback_analyzer">View GitHub Repo</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects;