import React from 'react'
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Phtop from "../../Asserts/Phtop.png";
import Phf from "../../Asserts/ph (1).png";
import Digis from "../../Asserts/Digi-small.png";
import Voltrixs from "../../Asserts/Voltrix-small.png";
import beleafts from "../../Asserts/Beleaft-small.png";
import { Link } from "react-router-dom";

const Ph = () => {
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
            Ph Online Ventures
            Landing page revamp design            </h3>
            <div className="d-flex w-50 justify-content-between web mt-5">
              <h4>Website Design</h4>
              <h4>2024</h4>
            </div>
            <p className="initial mt-5 w-75">
            The ph online ventures is one of the information technology company.
            </p>
          </div>

          <div className="">
            <img className="icoimg" src={Phtop} alt="" />
          </div>
        </div>
      </div>
      <div className="main-caps container">
        <h3 className="view">Landing Page View</h3>
        <div className="full-image">
          <img className="ico-full" src={Phf} alt="" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default Ph