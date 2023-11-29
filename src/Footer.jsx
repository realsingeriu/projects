import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const email = "realsingeriu12@naver.com";

  return (
    <div className="Footer">
      <p>Project</p>
      <div className="contact">
        <h5>Contact Me : </h5>{" "}
        <p>
          <a href="https://github.com/realsingeriu" target="_blank">
            <FaGithub
              className="icon"
              style={{ fontSize: "24px", color: "black" }}
            />
          </a>
        </p>
        <p>
          <a href="https://blog.naver.com/realsingeriu12" target="_blank">
            <SiNaver
              className="icon"
              style={{ fontSize: "22px", color: "#2DB400" }}
            />
          </a>
        </p>
        <p>
          <a href={`mailto:${email}`}>
            <IoMdMail
              style={{ fontSize: "24px", color: "#000" }}
              className="icon"
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
