import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="contact" className="jumbotron jumbotron-fluid m-0">
      <div className="container mb-4">
        <h1 className="display-3 contact-title">Contact Me</h1>
        <div className="social-networks">
          <a
            href="https://www.linkedin.com/in/musa-ali-cu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          {" / "}
          <a
            href="https://github.com/hellomusa"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          {" / "}
          <a
            href="mailto:musa6ali@gmail.com"
          >
          email
          </a>
        </div>
        <p className="copyright lead mt-2">© Musa Ali {year}</p>
      </div>
    </div>
  );
}

export default Footer;