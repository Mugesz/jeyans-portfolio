import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import img1 from "../../Asserts/img1.png";
import img2 from "../../Asserts/img2.png";
import img3 from "../../Asserts/img3.png";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section>
        <div className="full-line"></div>
        <div className="container home-section">
          <div className="final-wrapper mb-0">
            <div className="left-wrapper-home"></div>
            <div className="right-wrapper-home"></div>
          </div>

          <div className="pt-3 pb-3 some">
            <div className="content-div w-100 d-flex justify-content-center align-items-center gap-5 mb-2">
              <div className="line"></div>
              <h5 className="text-center latest">Some of my latest work</h5>
              <div className="line"></div>
            </div>
            <div className=" d-flex justify-content-around align-items-center last last-card ">
              <div className="inline-card pt-4 pb-2">
                <div className="blue-wrapper">
                  <img src={img1} alt="" />
                </div>

                <h3 className="ico">ICO Landing Page</h3>
                <p className="para">Website Design</p>
              </div>

              <div className="inline-card pt-4 pb-2">
                <div className="blue-wrapper">
                  <img src={img2} alt="" />
                </div>

                <h3 className="ico">P2P Landing Page</h3>
                <p className="para">Website Design</p>
              </div>

              <div className="inline-card pt-4 pb-2">
                <div className="blue-wrapper">
                  <img src={img3} alt="" />
                </div>

                <h3 className="ico">Crypto Hub</h3>
                <p className="para">Website Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
