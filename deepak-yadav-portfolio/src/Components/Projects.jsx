import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
// import { Flex } from "@chakra-ui/react";

import {
  famousFootwear,
  techCube,
  Arivu_arr,
 wholemart,
  attryb
} from "./AllProjects";

const Projects = () => {
  // const [tech, setTech] = React.useState("all");
  let tech="all"


  const allProjectArr = [
    famousFootwear,
    techCube,
    Arivu_arr,
    wholemart,
    attryb,
   
  ];
  const allWebArr = [famousFootwear, techCube, Arivu_arr,  wholemart, attryb, ];

  return (
    <section id="projects">
      <div id="tech" margin={"auto"} justifyContent={"space-around"}>
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
      {/* <Flex
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
          className={tech === "web" ? "active" : null}
          onClick={() => setTech("web")}
        >
          WEB
        </button>
        <button
          className={tech === "android" ? "active" : null}
          onClick={() => setTech("android")}
        >
          ANDROID{" "}
        </button>
      </Flex> */}
      <div id="procard">
        {tech === `android` ? (
          <>
          <h1 style={{margin:"auto",fontSize:"50px"}}>In Progress.....</h1>
            {/* <ProjectCard
              key={new Date().getMilliseconds() * Math.random() * 535533}
              arr={kirayPe}
            /> */}
          </>
        ) : null}
        {tech === "all" ? (
          <>
            {allProjectArr.map((el, index) => (
              <ProjectCard
                key={new Date().getMilliseconds() * Math.random() * 535533}
                arr={el}
              />
            ))}
          </>
        ) : null}
        {tech === "web" ? (
          <>
            {allWebArr.map((el, index) => (
              <ProjectCard
                key={new Date().getMilliseconds() * Math.random() * 535533}
                arr={el}
              />
            ))}
          </>
        ) : null}
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>
          Github Contribution Calender{" "}
        </h2>
      </div>
      <div id="calendar-parent">
      <div id="calendar">
        <GitHubCalendar
          fontSize={14}
          // color="#850db4"
          // color={"red"}
          blockRadius={1}
          blockMargin={6}
          blockSize={16}
          showWeekdayLabels
          username="Deepak-25yadav"
        />

      </div>
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>Github Stats </h2>
      </div>
      <div id="gitstats">
        <img
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Deepak-25yadav&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=false&layout=compact"
        />

        <img
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com/?user=Deepak-25yadav&theme=tokyonight&hide_border=true"
        />

        <img
          alt="7oSkaaa's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=Deepak-25yadav&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=false"
        />
      </div>
    </section>
  );
};

export default Projects;
