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
              i enjoy programming, reading about the mind, and listening to music. <br/>
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