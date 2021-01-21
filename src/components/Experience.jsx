import "./Experience.css";

import blueprint from "../images/blueprint.svg";
import carleton from "../images/carleton.png";

const Experience = () => {
  return (
    <div id="experience" className="above-particles jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h1 className="experience-title display-3">Experience</h1>

        {/* Blueprint */}
        <div className="pt-2 pb-5 row">
          <div className="col-md-3 order-md-1 align-self-center">
            <img className="blueprint-logo" src={blueprint} alt="blueprint" />
          </div>
          <div className="job-description col-md-9 order-md-2">
            <h3 className="job-heading display-4 pt-3">Carleton Blueprint</h3>
            <h4 className="text-muted job-subheading display-4">
              Backend Developer
            </h4>
            <h4 className="text-muted job-subheading display-4">
              January 2021 - Present
            </h4>
            <p></p>
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
              Assisted students in a one-on-one setting during weekly office hours, answering
              questions related to Python and making sure the course material is understood.
            </p>

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
              Refactored existing lab simulations and built new ones using Typescript and
              Angular, allowing students to safely complete course work from home.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;