import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import cryptotop from "../../Asserts/Cryptotop.png";
import cryptofull from "../../Asserts/crypyofull.png";
import Tcypro from "../../Asserts/tcypro.svg";
import Tph from "../../Asserts/Tph.svg";
import Tdigi from "../../Asserts/Tdigi.png";
import { Link } from "react-router-dom";
import Digis from "../../Asserts/Digi-small.png";
import Voltrixs from "../../Asserts/Voltrix-small.png";


const Crypto = () => {
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
                Crypto Hub Crypto exchange landing page design{" "}
              </h3>
              <div className="d-flex w-50 justify-content-between web mt-5">
                <h4>Website Design</h4>
                <h4>2024</h4>
              </div>
              <p className="initial mt-5 w-75">
                A crypto exchange is a platform where users can buy, sell, and
                trade cryptocurrencies. It allows users to exchange digital
                assets like Bitcoin, Ethereum, and others for fiat currencies or
                other cryptocurrencies, usually charging a small fee for
                transactions.
              </p>
            </div>

            <div className="">
              <img className="icoimg" src={cryptotop} alt="" />
            </div>
          </div>
        </div>
        <div className="main-caps container">
          <h3 className="view">Landing Page View</h3>
          <div className="full-image">
            <img className="ico-full" src={cryptofull} alt="" />
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
              <Link to="">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Tph} alt="" />
                    </div>

                    <h3 className="ico">PH Online Ventures</h3>
                    <p className="para">Website Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Digis} alt="" />
                    </div>

                    <h3 className="ico">Digi Class</h3>
                    <p className="para">Dashboard Design</p>
                  </div>
                </Link>{" "}
                <Link to="/capstone/ico">
                  <div className="inline-card pt-4 pb-2 blue-2">
                    <div className="blue-wrapper">
                      <img src={Voltrixs} alt="" />
                    </div>

                    <h3 className="ico">Voltrix</h3>
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

export default Crypto;
