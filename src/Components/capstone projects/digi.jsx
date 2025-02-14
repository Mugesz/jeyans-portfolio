import React from "react";

import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Digitop from "../../Asserts/Digitop.png";
import Digis from "../../Asserts/Digi (1).png";
import Voltrixs from "../../Asserts/Voltrix-small.png";
import beleafts from "../../Asserts/Beleaft-small.png";
import Beleafa from "../../Asserts/BeleafA-small.png";
import Digivisual from "../../Asserts/digivisual.png";

import { Link } from "react-router-dom";

const digi = () => {
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
                Digi Class Student UI dashboard design{" "}
              </h3>
              <div className="d-flex w-50 justify-content-between web mt-5">
                <h4>Dashboard Design</h4>
                <h4>2024</h4>
              </div>
              <p className="initial mt-5 w-75">
                The digi class is one of the education technology related
                company.
              </p>
            </div>

            <div className="">
              <img className="icoimg" src={Digitop} alt="" />
            </div>
          </div>
        </div>
        <div className="main-caps container">
          <h3 className="view">Landing Page View</h3>
          <div className="full-image">
            <img className="ico-full" src={Digis} alt="" />
          </div>
        </div>

        <div className="main-caps container">
          <h3 className="view">Visual screens</h3>
          <div className="full-image">
            <img className="ico-full" src={Digivisual} alt="" />
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default digi;
