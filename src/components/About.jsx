import "./About.css";
import Image from "react-bootstrap/Image";
import musa from "../images/musa.png";


const About = () => {
  return (
    <div id="about" className="above-particals jumbotron jumbotron-fluid bg-light text-black m-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title display-4 mb-4">👋 hey, i'm musa <span style={{fontSize: "2rem"}}>(he/him)</span></h1>
            <p className="description">
              <hr></hr>
              I'm a computer science student at <strong> Carleton University </strong>
              primarily interested in web development. I enjoy discovering
              new songs and movies
              <br/>
              <br/>
              Currently volunteering at <a href="https://cublueprint.org/">CU Blueprint </a>
              as a backend developer, helping develop pro-bono apps for nonprofits.
              <br/>
              <br/>
              <h4>STALK ME: (not implemented yet)</h4>
              <ul>
                <li>I probably just finished listening to <a href="#">Song Title</a></li>
                <li>I recently pushed some changes to <a href="#">Repo Name</a> (todo)</li>
              </ul>
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