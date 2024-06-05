import "../Style/topNavbar.css";

import React, { useState } from "react";
// import resumeFile from "../Resume/fw21_1203-Hanumat-Sharan-Resume.pdf"
import resumeFile from "../Resume/Deepak-Yadav-Resume.pdf"
import NavDrawer from "./NavDrawer";


const TopNavbar = () => {
  const handleResumeShow=()=>{
  window.open(`https://drive.google.com/file/d/1UlsGl6B8UjDJqb7q-upB6su6-qqWxmB_/view?usp=sharing`)
}
  const [current, setCurrent] = useState("#home");
  // const [fix,setFix]=useState(false)
  
  // const fixed=()=>{
  //   if(window.scrollY>=300){
  //     setCurrent("#skills")
  //   }else{
  //     setFix(false)
  //   }
  // }
  // window.addEventListener("scroll",fixed)

  return (
    <div>
      <div style={{height:"10vh"}} id="topnav">
        <a  href="https://deepak-25yadav.github.io/"><div  style={{ marginLeft: "40px", align: "center", padding: "4px" }}>
          <img width={"50px"} src={`deepakLogo.png`} alt="" />
        </div></a>
        <div id="navel">
          <div onClick={() => [setCurrent("#home"),window.location.href="#home"]}>
            {" "}
            <a href="#home">
              <h4 className={current === "#home" ? "activemain" : null}>
                Home
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#about"),window.location.href="#about"]}>
            <a href="#about">
              <h4 className={current === "#about" ? "activemain" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#skills"),window.location.href="#skills"]}>
            <a href="#skills">
              <h4 className={current === "#skills" ? "activemain" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#projects"),window.location.href="#projects"]}>
            <a href="#projects">
              <h4 className={current === "#projects" ? "activemain" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => [setCurrent("#contact"),window.location.href="#contact"]}>
            <a href="#contact">
              <h4 className={current === "#contact" ? "activemain" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div onClick={() => setCurrent("#resume")}>
            <span onClick={handleResumeShow}>
            <a  href={resumeFile} download>
              <h4 id="resumenav" className={current === "#resume" ? "activemain" : null}>
                Resume
              </h4>                                                                       
            </a></span>{" "}
          </div>
         
        </div>
        <div id="sidebar">
          <NavDrawer/>
          </div>
      </div>
    </div>
  );
};

export default TopNavbar;
