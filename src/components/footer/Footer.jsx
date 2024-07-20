import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h4>About</h4>
              <p className="paragraphAbout">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sedconsectetur
              </p>
              <ul className="social">
                <li>
                  <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
                    <i className="fa-brands fa-facebook facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/moamenhussein">
                    <i className="fa-brands fa-github github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
                    <i className="fa-brands fa-linkedin-in linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                    <i className="fa-brands fa-instagram insta"></i>
                  </a>
                </li>
                <li className="mywhats">
                  <a href="whatsapp.html">
                    <i className="fa-brands fa-whatsapp whats"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h4>Adderess</h4>
              <p>
                Healing Center, oo W Street
                <br /> name,
                <br /> Loram ipusum
              </p>
              <p className="number">01024327924</p>
              <p className="email">moamenhussein2424@gmail.com</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h4>Links</h4>
              <ul className="footerLinks">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Quality</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h4>Newsletter</h4>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email" required />
              <br />
              <input type="submit" value="Subscribe" />
            </div>
          </div>
        </div>
        <div className="footer-two">
          &copy; 2024 All Rights Reserved, Designed By <span>ENG/Moamen Hussein</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
