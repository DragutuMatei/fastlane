import React, { useState } from "react";
import "../assets/style/home2.scss";
import Button2 from "../components/buttons/Button2";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button1 from "../components/buttons/Button1";
import Button3 from "../components/buttons/Button3";
import Cookies from "../utils/Cookies";

let i = 0;
function Home2() {
  const [images, setImages] = useState([
    require("../assets/images/mock1.png"),
    require("../assets/images/mock2.png"),
    require("../assets/images/mock3.png"),
    require("../assets/images/mock4.png"),
    require("../assets/images/mock5.png"),
  ]);
  const [active, setActive] = useState(require("../assets/images/mock1.png"));
  const next = () => {
    if (i + 1 < images.length) {
      i++;
      setActive(images[i]);
    } else {
      i = 0;
      setActive(images[0]);
    }
  };
  const prev = () => {
    if (i - 1 >= 0) {
      i--;
      setActive(images[i]);
    } else {
      i = images.length - 1;
      setActive(images[images.length - 1]);
    }
  };
  return (
    <div className="home">
      <section className="f padding">
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
      </section>

      <section className="padding">
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
      </section>

      <section className="us dr">
        <h1 className="h1">
          HOW <span className="green_text">IT WORKS?</span>
        </h1>
        <div className="ss padding">
          <div className="borders green">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
          <div className="borders green">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
          <div className="borders green">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
          <div className="borders green">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="us st">
        <h1 className="h1">
          WHY <span className="purple_text">CHOOSE US?</span>
        </h1>
        <div className="ss padding">
          <div className="borders purple">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
          <div className="borders purple">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
          <div className="borders purple">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
          <div className="borders purple">
            <div className="card">
              <h3 className="title">INCENTIVIZED ENGAGEMENT</h3>
              <ul>
                <li>Engage and Reward</li>
              </ul>
              <p className="p1">
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects.
              </p>
              <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mockups padding">
        <div className="logo">
          <img src={require("../assets/images/logo_mock.png")} alt="" />
        </div>
        <div className="carousel">
          <IoIosArrowBack onClick={prev} />
          <div className="img">
            <div className="dots">
              <div className="dot p"></div>
              <div className="dot g"></div>
              <div className="dot b"></div>
            </div>
            <img src={active} alt="" />
          </div>
          <IoIosArrowForward onClick={next} />
        </div>
      </section> */}
      <section className="tt padding">
        <h1 className="h1">
          Earn as <span className="purple_text">You Grow</span>
        </h1>
        <div className="cards">
          <div className="card">
            <h3 className="title">BETA WHITELIST AICI FORM</h3>
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
          <div className="card">
            <h3 className="title">BETA WHITELIST AICI FORM</h3>
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
          <div className="card">
            <h3 className="title">BETA WHITELIST AICI FORM</h3>
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
          <div className="card">
            <h3 className="title">BETA WHITELIST AICI FORM</h3>
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
        <h1 className="h1">
          Engage as <span className="green_text">You Glow</span>
        </h1>
      </section>

      <Cookies />
    </div>
  );
}

export default Home2;
