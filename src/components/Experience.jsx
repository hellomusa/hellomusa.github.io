import "./Experience.css";

import blueprint from "../images/blueprint.svg";
import carleton from "../images/carleton.png";
import rbc from "../images/RBC.png";

const Experience = () => {
  return (
    <div id="experience" className="above-particles jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h1 className="experience-title display-3">experience</h1>

        {/* RBC */}
        <div className="pt-2 pb-5 row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img className="rbc-logo" src={rbc} alt="rbc" />
          </div>
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">Royal Bank of Canada</h3>
            <h4 className="text-muted job-subheading display-4">
              Software Developer Intern, DevOps Services
            </h4>
            <h4 className="text-muted job-subheading display-4">
              May 2021 - December 2021
            </h4>
            <ul>
              <li>
                Designed and developed a highly scalable framework using Nest.js, PostgreSQL and RabbitMQ to scan 20,000+ commits per day and flag code for hard-coded passwords across Enterprise GitHub, eliminating security risks and driving better coding standards at RBC
              </li>
              <li>
                Authored an automated test suite for the framework using an in-house testing platform and Python to make API requests to  GitHub and trigger scans, ensuring correct functionality
              </li>
              <li>
                Created Jenkins and Python scripts to automate suspension of user-inputted lists of inactive GitHub accounts, saving the DevOps department $15,000+ per year in expenses
              </li>
            </ul>
          </div>
        </div>

        {/* Blueprint */}
        <div className="pt-2 pb-5 row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img className="blueprint-logo" src={blueprint} alt="blueprint" />
          </div>
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">Carleton Blueprint</h3>

            <h4 className="text-muted job-subheading display-4">
              Tech Doc Writer
            </h4>
            <h4 className="text-muted job-subheading display-4">
              November 2021 - Present
            </h4>
            Creating technical documentation for development of a CRM dashboard a loan-lending non-profit, encompassing features to manage applications, loan payments, and accounts
            <hr/>
            <h4 className="text-muted job-subheading display-4">
              Backend Developer
            </h4>
            <h4 className="text-muted job-subheading display-4">
              January 2021 - October 2021
            </h4>
            <ul>
              <li>
                Wrote unit and integration tests for 10 REST API endpoints using Jest, maintaining club efforts in practicing Test-Driven-Development and achieving  a 100% test coverage on the codebase
              </li>
              <li>
              Implemented routes using Express.js with input validation and authentication using an MVC based design pattern, adding functionality for uploading and downloading user documents
              </li>
            </ul>

          </div>
        </div>

        {/* Carleton */}
        <div className="row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img className="carleton-logo" src={carleton} alt="carleton" />
          </div>
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">
              Carleton University
            </h3>

            {/* TA */}
            <h4 className="text-muted job-subheading display-4">
              Teaching Assistant, School of Computer Science
            </h4>
            <h4 className="text-muted job-subheading display-4">
              September - December 2020
            </h4>
            <p>
            Held weekly hands-on lab groups and office hours to clarify student concerns and increase  comprehension of material, helping develop better application of computer science knowledge
            </p>

            <hr/>

            {/* SaPP */}
            <h4 className="text-muted job-subheading display-4">
              Web Developer, Department of Biology
            </h4>
            <h4 className="text-muted job-subheading display-4">
              May - September 2020
            </h4>
            <p>
              Worked with lab coordinator{" "}
              <a href="https://carleton.ca/biology/people/shannon-newlands/">
                Shannon Newlands
              </a>
              {" "}
              as part of the{" "}
              <a href="https://carleton.ca/discoverycentre/funding-opportunities/students-as-partners-program-sapp/">
                Students as Partners Program (SaPP).
              </a>
              <br />
              <ul>
                <li>
                  Championed the development of an Angular web application with routing deployed on GitHub Pages to serve 6 virtual lab experiments allowing 500+ students to safely learn from home
                </li>
                <li>
                  Collected feedback from instructors and students to improve user experience and iteratively design a friendly user interface using Bootstrap styled components
                </li>
              </ul>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;