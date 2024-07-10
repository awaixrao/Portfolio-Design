function Footer() {
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-3">
            <h5>Credo</h5>
            <p className="grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              animi. 203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div className="col-md-2 pb-3 ">
            <div className=" text-uppercase pd">
              <h5 className="pb-2">Services</h5>
              <ul className="menu-list list-unstyled grey text-uppercase ">
                <li className="menu-item pb-2">
                  <a href="#">Wedding</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Portrait</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Photography</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className=" text-uppercase pd">
              <h5 className="pb-2">Resources</h5>
              <ul className="menu-list list-unstyled grey text-uppercase ">
                <li className="menu-item pb-2">
                  <a href="#">Wedding</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Portrait</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Photography</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <div className="contact-item pd">
              <h5 className="pb-2">Quick Links</h5>
              <ul className="menu-list list-unstyled text-uppercase grey ">
                <li className="menu-item pb-2">
                  <a href="#">Wedding</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Portrait</a>
                </li>
                <li className="menu-item pb-2">
                  <a href="#">Photography</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-2">
            <h5>Follow Me</h5>
            <div class="d-flex justify-content-between grey  fs-5">
              <i class="ri-facebook-fill"></i>
              <i class="ri-instagram-line"></i>
              <i class="ri-twitter-fill"></i>
              <i class="ri-linkedin-fill"></i>
              <i class="ri-youtube-fill"></i>
            </div>
          </div>
        </div>
        <p className="grey text-center py-5">
          Copyright © 2024 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </>
  );
}
export default Footer;
