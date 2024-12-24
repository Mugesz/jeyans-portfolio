import React from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Jeyan from "../../Asserts/jai.svg";
import Linked from "../../Asserts/Linked.svg";
import Behan from "../../Asserts/Behanc.svg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="c-section">
        <div className="line c-line"></div>
        <div className="Contactus-section container">
          <div className="">
            <div className="d-flex justify-content-center align-items-center">
              <div className="top-section-div">
                {" "}
                <h2 className="about">Contact</h2>
                <h3 className="latest mt-3">
                  Get in touch with me via social media or email.{" "}
                </h3>
                <div className="d-flex">
                  <div>
                    <img src={Linked} alt="" />
                  </div>
                  <div>
                    <img src={Behan} alt="" />
                  </div>
                </div>
                <div className="mail">
                  <button className=" p-2" src="mailtojeyan@gmail.com">
                    Send Mail
                  </button>
                </div>
              </div>

              <div className="right about-img-div d-flex justify-content-center align-items-center">
                <img className="jayan-img mt-5" src={Jeyan} alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />{" "}
    </>
  );
};

export default Contact;
