import React from "react";

import "../Style/about.css";
const About = () => {
  return (
    <section id="about">
      <div id="tech">
        <h1 style={{ color: "var(--color-font)" }}>About Me </h1>
      </div>

      <div id="aboutdiv">
        <div>
          <ul type="square">
            <li>
              Hello My Name is Deepak Yadav & I enjoy creating things that
              live on the Internet.{" "}
            </li>
            <li>
              {" "}
              I'm a passionate Developer, with strong administrative and
              communication skills , 1200 + hours of hands on experience in
              coding, good attention to detail and the ability to write
              efficient code using MERN Stack.
            </li>
            <li>
              My interest in web development started last year of my college when I was
              working with an E-Commerce project of my friends in which they were
              facing problems to make good web applications.
            </li>
            <li>
              As I grow and flourish as a Developer, one thing which keeps me
              going is my inquisitiveness for discovering new things every day.
            </li>
            <li>
              Fast Forwarding to today, I built a number of web applications and
              5 major projects. Learned a great deal about teamwork, leadership,
              and communication. After months of rigorous training, here I am
              looking for an opportunity as a full stack web developer.
            </li>
          </ul>
        </div>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/man-working-home_28923-46.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
