import React, { useEffect } from "react";
import "../Style/home.css";
// import resumeFile from "../Resume/fw21_1203-Hanumat-Sharan-Resume.pdf";
import resumeFile from "../Resume/Deepak-Yadav-Resume.pdf"
import { Typewriter } from "react-simple-typewriter";

// import hanumat_img from "../Components/Images/hanumat-logo.png";
import hanumat_img from "../Components/Images/Deepak-logo.png"
import Aos from "aos";

const handleResumeShow = () => {
  window.open(
    `https://drive.google.com/file/d/1uUEDZbWohQFOxCGTjl5cdYdI1bO7iT86/view?usp=sharing`
  );
};
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="home">
      <div id="profile">
        {/* image */}
        <img src={hanumat_img} alt="" style={{borderRadius:"40px"}}/>
      </div>
      <div id="hanumat">
        <h1>
          {" "}
          Hello{" "}
          <img
            width={35}
            src="https://em-content.zobj.net/thumbs/160/apple/325/waving-hand_1f44b.png"
            alt=""
          />{" "}
          My Name is{" "}
        </h1>
        <h1 id="name">Deepak Yadav</h1>
        <h1 id="type">
          <Typewriter
            deleteSpeed={90}
            typeSpeed={100}
            delaySpeed={2500}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Life Long Learner",
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="|"
          />
        </h1>

        <span onClick={handleResumeShow}>
          <a href={resumeFile} download>
            <button
              id="resume"
              style={{
                borderRadius: "1rem",

                color: "white",
                padding: "15px 20px 15px 20px",
              }}
            >
              Resume
            </button>
          </a>
        </span>

        <div id="homesocial">
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
    </section>
  );
};

export default Home;
