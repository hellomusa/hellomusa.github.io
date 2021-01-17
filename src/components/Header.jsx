import "./Header.css";
import squirtle from "../images/squirtle.png";
import CustomNavbar from "./CustomNavbar";

const Header = () => {
  return (
    <div>
      <CustomNavbar />
      <header className="App-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              {/* Personal Info */}
              <h1 style={{display: "inline", fontSize: "4rem"}}>musa ali</h1>
              <p>📖 computer science @ carleton university</p>
              <a href="#">linkedin</a> | <a href="#">github</a> | <a href="#">résumé</a>
            </div>
            <div className="col-md-3">
              {/* Squirtle Picture */}
              <img
                src={squirtle}
                alt="squirtle"
                style={{width: "250px", bottom: "20%", right: "20%", position: "relative"}}
              /> 
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;