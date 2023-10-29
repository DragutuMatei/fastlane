import React from "react";
import "../assets/style/footer.scss";
import { BsTelegram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <div className="logo">
            <img src={require("../assets/images/logo_full.png")} alt="" />
            {/* <img
              src={require("../assets/images/text_logo.svg").default}
              alt=""
            /> */}
          </div>
          <div className="socials">
            <a href="https://twitter.com/fstlaneapp" target="_blank">
              <FaSquareXTwitter style={{ fontSize: "34.29px" }} />
            </a>
            <a href="https://t.me/fastlaneportal" target="_blank">
              <BsTelegram />
            </a>
          </div>
          <p className="p1">
            Join our Telegram channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
        </div>
        <div className="right">
          <div className="l">
            <h3 className="title">Quick Links</h3>
            <a href="#about" className="p1">About</a>
            <a href="#roadmap" className="p1">Roadmap</a>
            <a target="_blank" href="https://docs.fastlane.buzz/faq/#top" className="p1">FAQs</a>
          </div>
          <div className="r">
            <h3 className="title">Community</h3>
            <a href="#how" className="p1">How it works!</a>
            <a href="#" className="p1">Get in touch</a>
          </div>
        </div>
      </div>
      <div className="down">
        <p className="p1">Copyright © 2023 FastLane All Rights Reserved.</p>
        <div className="p1s">
          <p className="p1">Privacy policy</p>
          <p className="p1">Terms of Use</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
