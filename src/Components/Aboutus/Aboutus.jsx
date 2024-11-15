import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import "./Aboutus.css";
import Jeyan from "../../Asserts/jeyan.png";
import bulb from "../../Asserts/bulb.png";
import skill from "../../Asserts/skil.svg";
import random from "../../Asserts/random.png";

const Aboutus = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* HERO SECTION */}

        <div className="hero-section">
          <div className="main-wrapper d-flex justify-content-between align-items-md-stretch">
            <div className="left about-content-div d-flex justify-content-center align-items-center">
              <div className="contents">
                <h2 className="about">About</h2>
                <h3 className="about-h6 mt-3">
                  I’m <span className="Jayan">Jayan</span> a product designer
                  based in chennai, India.
                </h3>
                <p className="about-para mt-3">
                  Since 2023, I’ve enjoyed turning complex problems into simple,
                  Beautiful and intuitive designs. When I’m not pushing pixels,
                  You’ll find me gardening or exploring something.
                </p>
              </div>
            </div>
            <div className="right about-img-div d-flex justify-content-center align-items-center">
              <img className="jayan-img mt-5" src={Jeyan} alt="About Us" />
            </div>
          </div>
        </div>

        {/* BULB_SECTION */}

        <div className="bulb-section">
          <div className="bulb-wrapper d-flex justify-content-between">
            <div className="bulb-left d-flex flex-column justify-content-center align-items-center">
              <div className="cotent1">
                <h5 className="ui">UiUx Designer</h5>
                <p className="bulb-para">UI Design</p>
                <p className="bulb-para">UX Design</p>
                <p className="bulb-para">Design Systems</p>
                <p className="bulb-para">Interaction Design</p>
                <p className="bulb-para">“Listening Songs”</p>
              </div>
            </div>
            <div className="bulb-middle">
              <img src={bulb} alt="" />
            </div>
            <div className="bulb-right d-flex flex-column justify-content-center align-items-center">
              <div className="cotent1">
                <h5 className="ui">Graphic Designer</h5>
                <p className="bulb-para">Poster Design</p>
                <p className="bulb-para">Logo Design</p>
                <p className="bulb-para">ID Card Design</p>
                <p className="bulb-para">Business Card Design</p>
                <p className="bulb-para">Envelop Cover Design</p>
              </div>
            </div>
          </div>
        </div>

        {/* MYSKILL */}

        <div className="main-section-skill">
          <img src={skill} alt="" />
        </div>

        {/* Facts */}
        <div className="main-facts-section">
          <div className="random d-flex justify-content-between">
            <div className="random-left">
              <img src={random} alt="" />
            </div>
            <div className="random-right">
              <h3 className="facts">Random Facts</h3>
              <p className="para-fact">I drink a lot of tender coconut.</p>
              <p className="para-fact">Gardening is another part of my life.</p>
              <p className="para-fact">
                I love to ate but I don’t know cook, I’ll try to cook soon.
              </p>
              <p className="para-fact">I’m a bit of a clean freak.</p>
              <p className="para-fact">I want to live unique.</p>
              <p className="para-fact">I’m slightly addicted to LinkedIn.</p>
              <p className="para-fact">My experience is my mentor.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Aboutus;
