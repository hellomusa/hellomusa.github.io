import "./Header.css";

import Typist from "react-typist";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">

              {/* Personal Info */}
              <h1 class="name">musa ali</h1>
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
                    📖 studying cs @ 
                    <span style={{color: "red"}}> carleton u</span>
                  </p>
                </div>
              </Typist>

              <div class="links">
                <a href="https://www.linkedin.com/in/musa-ali-cu/"> linkedin </a>
                /
                <a href="https://github.com/hellomusa"> github </a>
                /
                <a href="#"> resume </a>
                /
                <a href="#"> email </a>
              </div>
            </div>

            {/*}
            <div className="col-md-4">
              {/* Squirtle Picture */}
              {/*<img
                src={squirtle}
                alt="squirtle"
                style={{width: "250px", bottom: "20%", right: "20%", position: "relative"}}
              />
              </div>*/}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;