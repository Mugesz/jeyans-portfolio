import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import peertop from "../../Asserts/peertop.svg";
import peerfull from "../../Asserts/peerfull.png";
import Tcypro from "../../Asserts/tcypro.svg";
import Tph from "../../Asserts/Tph.svg";
import Tdigi from "../../Asserts/Tdigi.png";
import { Link } from "react-router-dom";

const peertopeer = () => {
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
                Peer to Peer (P2P) Landing page revamp design{" "}
              </h3>
              <div className="d-flex w-50 justify-content-between web mt-5">
                <h4>Website Design</h4>
                <h4>2024</h4>
              </div>
              <p className="initial mt-5 w-75">
                Peer-to-Peer (P2P) is a decentralized network model where users
                interact directly with each other to exchange goods or services,
                such as cryptocurrencies, without the need for an intermediary
                or central authority. Each participant acts as both a buyer and
                a seller in the transaction.
              </p>
            </div>

            <div className="">
              <img className="icoimg" src={peertop} alt="" />
            </div>
          </div>
        </div>
        <div className="main-caps container">
          <h3 className="view">Landing Page View</h3>
          <div className="full-image">
            <img className="ico-full" src={peerfull} alt="" />
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
                <div className="inline-card pt-4 pb-2 blue-1">
                  <div className="blue-wrapper">
                    <img src={Tcypro} alt="" />
                  </div>

                  <h3 className="ico">Crypto Hub</h3>
                  <p className="para">Website Design</p>
                </div>

                <div className="inline-card pt-4 pb-2 blue-2">
                  <div className="blue-wrapper">
                    <img src={Tph} alt="" />
                  </div>

                  <h3 className="ico">PH Online Ventures</h3>
                  <p className="para">Website Design</p>
                </div>

                <div className="inline-card pt-4 pb-2 blue-2">
                  <div className="blue-wrapper">
                    <img src={Tdigi} alt="" />
                  </div>

                  <h3 className="ico">Digi Class</h3>
                  <p className="para">Website Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default peertopeer;
