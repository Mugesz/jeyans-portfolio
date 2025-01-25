import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Jeyan from "../../Asserts/jai.svg";
import Linked from "../../Asserts/Linked.svg";
import Behan from "../../Asserts/Behanc.svg";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMail = () => {
    const recipientEmail = "jeyan@gmail.com"; // Your email address
    const subject = "Contact Request";
    const body = `Sender Email: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <>
      <Navbar />
      <section className="c-section">
        <div className="line c-line"></div>
        <div className="Contactus-section container">
          <div className="">
            <div className="d-flex justify-content-center align-items-center">
              <div className="top-section-div">
                <h2 className="about">Contact</h2>
                <h3 className="latest mt-3">
                  Get in touch with me via social media or email.
                </h3>
                <div className="d-flex">
                  <div>
                    <img src={Linked} alt="LinkedIn" />
                  </div>
                  <div>
                    <img src={Behan} alt="Behance" />
                  </div>
                </div>
              </div>

              <div className="right about-img-div d-flex justify-content-center align-items-center">
                <img className="jayan-img mt-5" src={Jeyan} alt="About Us" />
              </div>
            </div>
          </div>
          <div>
          <div className="mail w-50">
          <h3 className="latest mt-3 mb-4">
                 Send me an email.
                </h3>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <textarea
                    className="form-control mb-3"
                    rows="4"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button className="btn btn-primary p-2 mb-3" onClick={handleSendMail}>
                    Send Mail
                  </button>
                </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
