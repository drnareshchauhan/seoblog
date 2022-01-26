const styles = {
  textAlign: "center",
  alignItems: "center",
};

const Footer = () => {
  return (
    // <footer id="footer" style={styles}>
    //   <div>
    //     <p>
    //       <a href="https://github.com/drnareshchauhan" className="text-muted">
    //         <GitHubIcon />
    //         drnareshchauhan
    //       </a>
    //     </p>
    //   </div>
    // </footer>
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div id="footer" className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div id="footer" className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div id="footer" className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow-us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.facebook.com/login"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook fontawsome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-github fontawsome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube fontawsome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://twitter.com/?lang=en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter fontawsome-style"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr id="line" />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  ©drnareshchauhan All rights reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
