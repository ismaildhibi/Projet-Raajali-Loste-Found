import React from "react";

function Footer() {
  return (
    <footer>
      <div class="footer" id="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3  col-md-3 col-sm-4 col-xs-6">
              <h3> About Rajaali </h3>
              <p className="aboutfooter">
                Rajaali recovery tags help identify and protect all types of
                portable items ranging from cell phones to laptops, keys to
                luggage and even pets, such as cats to dogs.
              </p>
              {/* <ul>
                <li>
                  {" "}
                  <a href="#"> Our Company </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#"> About Us </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#"> Terms of Services </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#"> Our Team </a>{" "}
                </li>
              </ul>
            </div>

            <div class="col-lg-2  col-md-2 col-sm-4 col-xs-6">
              <h3> Contact </h3>

              <ul>
                <li>
                  {" "}
                  <a href="#"> Contact Marketing </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#"> Contact Sales </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#"> Contact HR </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#"> Contact Admin </a>{" "}
                </li>
              </ul> */}
            </div>
            <div class="col-lg-3  col-md-3 col-sm-6 col-xs-12 ">
              <h3> Social</h3>

              <ul>
                <li></li>
              </ul>

              <ul class="social">
                <li>
                  {" "}
                  <a href="https://www.facebook.com/Dhibi.Ismail">
                    {" "}
                    <i class="fab fa-facebook-square"></i>
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="https://www.linkedin.com/in/ismail-dhibi-76b839134/">
                    {" "}
                    <i class="fab fa-linkedin"></i>
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <i class="fab fa-google-plus-g"></i>{" "}
                  </a>{" "}
                </li>

                <li>
                  {" "}
                  <a href="#">
                    {" "}
                    <i class="fab fa-pinterest-p"></i>
                  </a>{" "}
                </li>

                <li>
                  <a href="#">
                    {" "}
                    <i class="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>
        <div className="copyright">
          <p>Copyright - 2019 Rajaali™. All rights reserved</p>
        </div>
      </div>

      {/* <div class="footer-bottom">
        <div class="container">
          <p class="pull-left"> Copyright © 2019. All rights reserved. </p>
        </div> */}
      {/* </div> */}
    </footer>
  );
}
export default Footer;
