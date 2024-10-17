import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Main-footer">
      <div className="line-full"></div>
      <div className="container flex-div d-flex justify-content-between align-items-center">
        <div className="rights">
          <p className="latest">© 2024 Jayan. All Rights Reserved.</p>
        </div>
        <div className="navs d-flex justify-content-center gap-5">
          <p className="latest">About</p>
          <p className="latest">Capstone</p>
          <p className="latest">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
