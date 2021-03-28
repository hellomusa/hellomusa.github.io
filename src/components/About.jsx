import "./About.css";
import Image from "react-bootstrap/Image";
import musa from "../images/musa.png";
import Activity from "./Activity";

const About = () => {
  return (
    <div id="about" className="above-particals jumbotron jumbotron-fluid bg-light text-black m-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title display-4 mb-4">👋 hey, i'm musa <span style={{fontSize: "2rem"}}>(he/him)</span></h1>
            <p className="description">
              <hr></hr>
              I'm a computer science student who is exploring the different ways technology can be used to <strong>make a difference.</strong>
              <br/><br/>
              Currently, I'm volunteering at <a href="https://cublueprint.org/">CU Blueprint </a>
              as a backend developer, helping develop pro-bono apps for a nonprofit.
              <br/><br/>
              This May 2021, I will be joining <a href="https://www.rbc.com/about-rbc.html">RBC</a> for an 8-month internship.
              <br/>
              <hr></hr>
              <Activity />
            </p>
          </div>
          <div className="col-md-6 align-self-center">
            <Image className="image" src={musa} roundedCircle />
            <p>Varadero, Cuba</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;