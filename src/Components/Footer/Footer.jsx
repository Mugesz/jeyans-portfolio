import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Main-footer">
      <div className="line-full"></div>
      <div className="container flex-div d-flex justify-content-between align-items-center">
        <div className="rights">
          <p className="latesty">© 2024 Jayan. All Rights Reserved.</p>
        </div>
        <div className="navs d-flex justify-content-center gap-5">
          <p className="latesty">About</p>
          <p className="latesty">Capstone</p>
          <p className="latesty">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
