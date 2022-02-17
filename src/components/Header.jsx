import "./Header.css";

import Typist from "react-typist";
import XNavbar from "./XNavbar";
import FunkyButton from "./FunkyButton";

import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <XNavbar />
      <header id="home" className="App-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">

              {/* Personal Info */}
              <div className="rotatingText">
                <h1 class="name">musa ali</h1>
              </div>
              <Typist
                avgTypingDelay={75}
                cursor={{
                  show: true,
                  blink: true,
                  element: "",
                  hideWhenDone: false,
                  hideWhenDoneDelay: 1000,
                }}
              >
                <div class="school">
                  <p>
                    Computer Science @ 
                    <a href="https://carleton.ca/" style={{color: "red"}}> Carleton University</a>
                  </p>
                </div>
              </Typist>

              <div class="links">
                <FunkyButton url="https://www.linkedin.com/in/musa-ali-cu/" icon={faLinkedinIn}/>
                <FunkyButton url="https://github.com/hellomusa" icon={faGithub} />
                <FunkyButton url="mailto:musa6ali@gmail.com" icon={faEnvelope} />
              </div>
            </div>
          </div>
          <div className="scroll bounce">
            <i class="fa fa-arrow-down fa-2x" />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;