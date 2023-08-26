import React from "react";
import "../assets/style/home2.scss";
import Button2 from "../components/buttons/Button2";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import Nicetext from "../components/Nicetext";
import Button1 from "../components/buttons/Button1";
import Button3 from "../components/buttons/Button3";

function Home2() {
  return (
    <div className="home">
      <div className="f">
        <h2 className="h2">
          Fueling Engagement on the <span id="first">Fast</span>
          <span id="second">Lane</span> to Success.
        </h2>
        <div id="banner1">
          <h3 className="title">
            Exciting news! <br /> FASTLANE’s community is launching.
          </h3>
          <p className="p1">Be part of the movement!</p>

          <Button2>
            <h4 className="button">
              Join our community
              <span className="icon">
                <AiOutlineArrowRight />
              </span>
            </h4>
          </Button2>
        </div>
      </div>

      <div style={{ padding: "10px 0px 0 100px" }}>
        <div className="border">
          <div id="banner2">
            <h2 className="h2">
              See how we are planning to shape the future of WEB3 Communities.
            </h2>
            <p className="p1">
              Explore our vision for a rewarding tomorrow, where engagement
              ignites innovation and collaboration leads the way.
            </p>
            <p className="p1">
              Join us as we forge a new path, shaping the future of community
              interaction, one task at a time.
            </p>
            <div className="buts">
              <Button1>
                <h4 className="button">Read our LitePaper</h4>
              </Button1>
              <Button3>
                <h4 className="button">FastLane Community</h4>
              </Button3>
              <Button3>
                <h4 className="button">FAQ</h4>
              </Button3>
              <Button3>
                <h4 className="button">Check our Twitter</h4>
              </Button3>
            </div>
          </div>
        </div>
      </div>
      <div className="us">
        <h1 className="h1">
          WHY <span className="green_text">CHOOSE US?</span>
        </h1>
        <div className="ss dr">
          <div className="border_green">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
