import React from "react";
import "./style.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import icotop from "../../Asserts/icotop.svg"
const ico = () => {
  return (
    <>
      <Navbar />
      <section className="ico-section">
      <div className="line"></div>
        <div className=" container pt-5">
          <div className="d-flex justify-content-center align-items-baseline ">
            <div className="contents">
              <h3 className="ico mt-3 w-75">
                Initial Coin Offering (ICO) Landing page 
                revamp design{" "}
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
              <img src={icotop} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ico;
