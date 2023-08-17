import React from "react";

import { useForm, ValidationError } from "@formspree/react";

import "../Style/contact.css";
function ContactForm() {
  const [state, handleSubmit] = useForm("xyyayvwe");

  if (state.succeeded) {
    return (
      <>
        {" "}
        <div id="formsub" style={{ textAlign: "center" }}>
          <img
            width={300}
            src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
            alt=""
          />
          <h1>Your mail has been sent Succesfully !</h1>
        </div>
      </>
    );
  }

  return (
    <section id="contact">
      <div id="tech" margin={"auto"} justifyContent={"space-around"}>
        <h1 style={{ color: "var(--color-font)" }}>Contact Me </h1>
      </div>
      <div id="contactform">
        {/*   <i class="fa-sharp fa-solid fa-location-pin"></i>{" "}    <i class="fa-solid fa-envelope"></i>*/}
        <div id="contactlinkdiv">
          <div>
            <div>
              {" "}
              <div style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h4>25yadavdeepak@gmail.com</h4>
            </div>
            <div>
              <a
                target={"blank"}
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=25yadavdeepak@gmail.com"
              >
                <button id="btnform">Email Now !</button>
              </a>
            </div>
          </div>
          <div className="whatsapp">
            <div>
              {" "}
              <div style={{ fontSize: "1.5rem", marginRight: "10px" }}>
                <i class="fa-solid fa-phone"></i>
              </div>
              <h4> Phone : +91 9140443308</h4>
            </div>
            <div>
              <a target={"blank"} href="tel:919140443308">
                {" "}
                <button id="btnform">Call Now !</button>
              </a>
            </div>
          </div>
          <div className="call">
            <div>
              <div style={{ fontSize: "2rem", marginRight: "20px" }}>
                {" "}
                <i class="fa-brands fa-whatsapp"></i>
              </div>
              <h4> Whatsapp</h4>
            </div>
            <div>
              <a target={"blank"} href="https://wa.me/919140443308">
                <button id="btnform">Whatsapp Now !</button>
              </a>
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "space-evenly" }}
            id="socialgit"
          >
            <a target="blank" href="https://github.com/Deepak-25yadav">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a
              target="blank"
              href="https://www.linkedin.com/in/deepak0606/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <h4>Your Name </h4>
            <input id="name" placeholder="Insert Your Name" name="Name" />
            <h4>Email Address</h4>
            <input
              id="email"
              placeholder="Insert Your Email"
              type="email"
              name="Email"
            />

            <h4>Mobile Number</h4>
            <input id="mobile" placeholder="+91" type="number" name="Mobile" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <h4>Message</h4>
            <input
              placeholder=" Insert Your Message"
              style={{ paddingTop: "10px", paddingBottom: "90px" }}
              id="message"
              type="text"
              name="Message"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div id="formbu">
              <button
                style={{ width: "55%", marginBottom: "20px" }}
                id="btnform"
                type="submit"
                disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
