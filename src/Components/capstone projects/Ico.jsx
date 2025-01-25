import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import icotop from "../../Asserts/icotop.svg";
import icofull from "../../Asserts/icofull.svg";
import Tcypro from "../../Asserts/tcypro.svg";
import img2 from "../../Asserts/img2.png";
import Tph from "../../Asserts/Tph.svg";
import { Link } from "react-router-dom";
const ico = () => {
  return (
    <>
      <Navbar />
      <section className="ico-section">
        <div className="line ico-line"></div>
        <div className="line-ico"></div>
        <div className=" container ">
          <div className="d-flex justify-content-center align-items-baseline ">
            <div className="contents">
              <h3 className="ico mt-3 w-75">
                Initial Coin Offering (ICO) Landing page revamp design{" "}
              </h3>
              <div className="d-flex w-50 justify-content-between web mt-5">
                <h4>Website Design</h4>
                <h4>2024</h4>
              </div>
              <p className="initial mt-5 w-75">
                An Initial Coin Offering (ICO) is a fundraising method used by
                cryptocurrency startups to raise capital by selling a new
                digital token or cryptocurrency. Investors purchase these tokens
                with the expectation that the value may increase, similar to an
                IPO in traditional finance. ICOs are often used to fund new
                blockchain projects.
              </p>
            </div>

            <div className="">
              <img className="icoimg" src={icotop} alt="" />
            </div>
          </div>
        </div>
        <div className="main-caps container">
          <h3 className="view">Landing page view</h3>
          <div className="full-image">
            <img className="ico-full" src={icofull} alt="" />
          </div>
        </div>

        <div className="morecaps container">
          <div className="content-div w-100 d-flex justify-content-center align-items-center gap-5 mb-2">
            <div className="line"></div>
            <h5 className="text-center latest more">More from my capstones</h5>

            <div className="line"></div>
          </div>
          <div className="cards-blue">
            <div className="pt-3 pb-3 some">
              <div className="content-div w-100 d-flex justify-content-center align-items-center gap-5 mb-2"></div>
              <div className=" d-grid  last last-card ">
                <Link to="/capstone/peer-to-peer">
                  {" "}
                  <div className="inline-card pt-4 pb-2 blue-1">
                    <div className="blue-wrapper">
                      <img src={img2} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>

                <Link to="/capstone/Crypto-hub">
                  {" "}
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Tcypro} alt="" />
                    </div>

                    <h3 className="ico">Crypto Hub</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>

                <Link to="">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Tph} alt="" />
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

export default ico;
