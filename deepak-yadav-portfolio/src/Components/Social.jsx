import React from "react";
import "../Style/social.css";

const Social = () => {
 
  return (
    <div id="social" >
      <div id="git">
        {" "}
        <a  target="blank" href="https://github.com/Deepak-25yadav">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
 <div id="link">
        {" "}
        <a  target="blank" href="https://www.linkedin.com/in/deepak0606/">
          {" "}
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
