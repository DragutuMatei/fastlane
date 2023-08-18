import React from "react";
import "../assets/style/footer.scss";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
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
            <BsTwitter />
            <AiOutlineInstagram />
            <AiFillYoutube />
          </div>
          <p className="p1">
            Join our Telegram channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
        </div>
        <div className="right">
          <div className="l">
            <h3 className="title">Quick Links</h3>
            <p className="p1">About</p>
            <p className="p1">Collection</p>
            <p className="p1">Roadmap</p>
            <p className="p1">FAQs</p>
          </div>
          <div className="r">
            <h3 className="title">Community</h3>
            <p className="p1">How it works!</p>
            <p className="p1">Blockchain</p>
            <p className="p1">Get in touch</p>
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
