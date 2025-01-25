import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Caps from "../../Asserts/caps.png";
import "./Capstones.css";
import img1 from "../../Asserts/img1.png";
import img2 from "../../Asserts/img2.png";
import img3 from "../../Asserts/img3.png";
import { Link } from "react-router-dom";

const Capstones = () => {
  return (
    <>
      <Navbar />
      <section className="caps-section">
        <div className="line customline"></div>
        <div className="top-section-div container">
          <div className="left about-content-div d-flex justify-content-center align-items-center Caps">
            <div className="contents w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="about text-center">Capstones</h2>
              <h3 className="latest mt-3 text-center">
                Check out some of my latest design case studies.
              </h3>
              <p className="about-para mt-3 w-50 text-center">
                I’ve worked for startups, revamps, payment application, and
                students dashboard and poster designs then some graphical
                designs.
              </p>
            </div>
          </div>

          <div className="image caps-image d-flex justify-content-center align-items-center">
            <img src={Caps} alt="" />
          </div>

          <div className="cards-blue">
            <div className="pt-3 pb-3 some">
              <div className="content-div w-100 d-flex justify-content-center align-items-center gap-5 mb-2">
              </div>
              <div className=" d-grid  last last-card ">
           

                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>

                <Link to="/capstone/peer-to-peer">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>    <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>

               
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Capstones;
