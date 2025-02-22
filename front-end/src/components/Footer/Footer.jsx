import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import LeetCode from "../../img/leetcode.png";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Email:- ashishauti123@gmail.com</span>
        <div className="f-icons">
          {/* <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} /> */}
          {/* <Gitub color="white" size={"3rem"} /> */}
          <span>Copyright © 2025 Ashish Auti - All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
