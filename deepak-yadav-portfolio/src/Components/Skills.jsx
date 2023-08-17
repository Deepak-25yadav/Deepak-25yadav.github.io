import React from "react";

import "../Style/skill.css";
import { frontend, backend, toolsarr, skillsarr } from "./AllSkills";

import { Flex } from "@chakra-ui/react";

const Skills = () => {
  const [tech, setTech] = React.useState("all");

  return (
    <section id="skills">
      <Flex id="tech">
        <h1 style={{ color: "var(--color-font)" }}>Technical Skills </h1>
        {/* <h1 style={{ color: "var(--color-font)" }}> Skills </h1> */}
      </Flex>
      <Flex
        id="skillsButton"
        m="auto"
        w={400}
        mb={"60px"}
        justifyContent={"space-evenly"}
      >
        <button
          className={tech === "all" ? "active" : null}
          onClick={() => setTech("all")}
        >
          ALL
        </button>
        <button
          className={tech === "frontend" ? "active" : null}
          onClick={() => setTech("frontend")}
        >
          FRONTEND{" "}
        </button>
        <button
          className={tech === "backend" ? "active" : null}
          onClick={() => setTech("backend")}
        >
          BACKEND
        </button>
      </Flex>
      {tech === "all" ? (
        <div id="skillsdiv">
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      {tech === "backend" ? (
        <div id="skillsdiv">
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      {tech === "frontend" ? (
        <div id="skillsdiv">
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      <Flex id="tools" margin={"auto"} justifyContent={"space-around"}>
        <h1 style={{ color: "var(--color-font)" }}>Tools </h1>
      </Flex>
      <div id="skillsdiv">
        {toolsarr.map((el) => (
          <div>
            {" "}
            <img alt="" src={el.img} />
            <h3>{el.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
