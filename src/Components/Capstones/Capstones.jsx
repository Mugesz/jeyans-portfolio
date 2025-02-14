import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Caps from "../../Asserts/caps.png";
import "./Capstones.css";
import img1 from "../../Asserts/img1.png";
import img2 from "../../Asserts/img2.png";
import Tcypro from "../../Asserts/tcypro.svg";
import Tph from "../../Asserts/Tph.svg";
import Digis from "../../Asserts/Digi-small.png";
import Voltrixs from "../../Asserts/Voltrix-small.png";
import beleafts from "../../Asserts/Beleaft-small.png";
import Beleafa from "../../Asserts/BeleafA-small.png";
import Rifas from "../../Asserts/Rifa-small.png";
import Rifs from "../../Asserts/Rifaw-small.png";
import Rifaw from "../../Asserts/Rifaw-small.png";
import Brand from "../../Asserts/BrandI-small.png";
import Port from "../../Asserts/Portfolio-small.png";
import evaloo from "../../Asserts/Evaloo-small.png";
import hue from "../../Asserts/heuristic-small.png";
import ux from "../../Asserts/Uxlaws-small.png";
import ram from "../../Asserts/heyram-small.png";
import jm from "../../Asserts/jm-small.png";
import Netflix from "../../Asserts/netflix-small.png";

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
              <div className="content-div w-100 d-flex justify-content-center align-items-center gap-5 mb-2"></div>
              <div className=" d-grid  last last-card ">
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={img1} alt="" />
                    </div>

                    <h3 className="ico">P2P Landing Page</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>
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
                <Link to="/capstone/ph-online">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Tph} alt="" />
                    </div>

                    <h3 className="ico">PH Online Ventures</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/digi">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Digis} alt="" />
                    </div>

                    <h3 className="ico">Digi Class</h3>
                    <p className="para">Dashboard Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/voltrix">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Voltrixs} alt="" />
                    </div>

                    <h3 className="ico">Voltrix</h3>
                    <p className="para">Pitch Deck</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/beleaf-trading-bo">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={beleafts} alt="" />
                    </div>

                    <h3 className="ico">Beleaf Trading Bot</h3>
                    <p className="para">Pitch Deck</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/Beleaf-Arbitrage-Bot">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Beleafa} alt="" />
                    </div>

                    <h3 className="ico">Beleaf Arbitrage Bot</h3>
                    <p className="para">Pitch Deck</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/Rifa-World-Company">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Rifs} alt="" />
                    </div>

                    <h3 className="ico">Rifa World Company</h3>
                    <p className="para">Banner Design</p>
                  </div>
                </Link>
                <Link to="/capstone/Rifa-World-Company-2">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Rifaw} alt="" />
                    </div>

                    <h3 className="ico">Rifa World Company 2</h3>
                    <p className="para">Banner Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Brand} alt="" />
                    </div>

                    <h3 className="ico">Brand Identity</h3>
                    <p className="para">Graphic Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Port} alt="" />
                    </div>

                    <h3 className="ico">Poster Design</h3>
                    <p className="para">Graphic Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={evaloo} alt="" />
                    </div>

                    <h3 className="ico">Evaloo Pay - Payment Application</h3>
                    <p className="para">Case Study</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={hue} alt="" />
                    </div>

                    <h3 className="ico">Heuristic Evaluation</h3>
                    <p className="para">Case Study</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={ux} alt="" />
                    </div>

                    <h3 className="ico">UX Law’s</h3>
                    <p className="para">Case Study</p>
                  </div>
                </Link>
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={ram} alt="" />
                    </div>

                    <h3 className="ico">Hey Ram Infrastructure</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={jm} alt="" />
                    </div>

                    <h3 className="ico">JM Frictech India Pvt Ltd</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Netflix} alt="" />
                    </div>

                    <h3 className="ico">Netflix</h3>
                    <p className="para">Landing Page Design</p>
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
