import React, { useEffect, useState } from "react";
import "../assets/style/home2.scss";
import Button2 from "../components/buttons/Button2";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button1 from "../components/buttons/Button1";
import Button3 from "../components/buttons/Button3";
import Cookies from "../utils/Cookies";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home">
      <section className="f padding">
        <h2 className="h2" data-aos="fade-right">
          Fueling Engagement on the <span id="first">Fast</span>
          <span id="second">Lane</span> to Success.
        </h2>
        <div id="banner1" data-aos="fade-left">
          <h3 className="title" data-aos="fade-down" data-aos-delay="400">
            Exciting news! <br /> FASTLANE’s community is launching.
          </h3>
          <p className="p1" data-aos="fade-up" data-aos-delay="500">
            Be part of the movement!
          </p>

          <Button2>
            <h4 data-aos="fade-left" data-aos-delay="550" className="button">
              Join our community
              <span className="icon">
                <AiOutlineArrowRight />
              </span>
            </h4>
          </Button2>
        </div>
      </section>

      <section className="padding" id="about">
        <div className="border" data-aos="fade-left">
          <div id="banner2">
            <h2 className="h2" data-aos="fade-down" data-aos-delay="400">
              See how we are planning to shape the future of WEB3 Communities.
            </h2>
            <p className="p1" data-aos="fade-right" data-aos-delay="500">
              Explore our vision for a rewarding tomorrow, where engagement
              ignites innovation and collaboration leads the way.
            </p>{" "}
            <p className="p1" data-aos="fade-right" data-aos-delay="500">
              Join us as we forge a new path, shaping the future of community
              interaction, one task at a time.
            </p>
            <div className="buts" data-aos="fade-right" data-aos-delay="600">
              <Button1 link={"https://demo.fastlane.buzz/"}>
                <h4
                  className="button"
                  data-aos="fade-down"
                  data-aos-delay="600"
                >
                  Read our Docs
                </h4>
              </Button1>
              <Button3 link={""}>
                <h4
                  className="button"
                  data-aos="fade-down"
                  data-aos-delay="600"
                >
                  Join us on Telegram
                </h4>
              </Button3>
              <Button3 link={"https://docs.fastlane.buzz/faq/#top"}>
                <h4
                  className="button"
                  data-aos="fade-down"
                  data-aos-delay="600"
                >
                  FAQ
                </h4>
              </Button3>
              <Button3 link={"https://twitter.com/fstlaneapp"}>
                <h4
                  className="button"
                  data-aos="fade-down"
                  data-aos-delay="600"
                >
                  Check our Twitter
                </h4>
              </Button3>
            </div>
          </div>
        </div>
      </section>

      <section className="us dr" id="how">
        <h1 className="h1" data-aos="fade-down">
          HOW <span className="green_text">IT WORKS?</span>
        </h1>
        <div className="ss padding">
          <div
            className="borders green"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="card">
              <h3 className="title">
                {" "}
                <img
                  style={{ width: 30 }}
                  src={require("../assets/images/icon_logo.svg").default}
                  alt=""
                />{" "}
                Set up the board
              </h3>
              {/* <ul>
                <li>Engage and Reward</li>
              </ul> */}
              <p className="p1">
                Start by creating a board on our platform. This board will serve
                as a centralized hub for all your activities.
              </p>
              {/* <p className="p1">
                By offering tangible rewards in the form of tokens, community
                members are motivated to participate actively and contribute
                constructively.
              </p>
              <p className="p1">
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p> */}
            </div>
          </div>
          <div
            className="borders green"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="card">
              <h3 className="title">
                {" "}
                <img
                  style={{ width: 30 }}
                  src={require("../assets/images/icon_logo.svg").default}
                  alt=""
                />{" "}
                Create tasks
              </h3>
              <p className="p1">
                Use FS Tokens to generate tasks on your board. These tasks are
                integral for the success of your community as they represent
                items that need to be completed.
              </p>
            </div>
          </div>
          <div
            className="borders green"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="card">
              <h3 className="title">
                {" "}
                <img
                  style={{ width: 30 }}
                  src={require("../assets/images/icon_logo.svg").default}
                  alt=""
                />{" "}
                Select tasks
              </h3>
              <p className="p1">
                Add FS Tokens to your balance before proceeding to allocate them
                for each individual task.
              </p>
            </div>
          </div>
          <div
            className="borders green"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div className="card">
              <h3 className="title">
                {" "}
                <img
                  style={{ width: 30 }}
                  src={require("../assets/images/icon_logo.svg").default}
                  alt=""
                />{" "}
                Task Validation and Rewards
              </h3>
              <p className="p1">
                Upon successful completion of a task, users are required to
                validate their accomplishment.
              </p>
              <p className="p1">
                {" "}
                As a token of recognition for their efforts, users will be
                rewarded with FS Tokens, providing a tangible incentive for
                their contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="us st">
        <h1 className="h1" data-aos="fade-down">
          WHY <span className="purple_text">CHOOSE US?</span>
        </h1>
        <div className="ss padding">
          <div
            className="borders purple"
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
          <div
            className="borders purple"
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
          <div
            className="borders purple"
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
          <div
            className="borders purple"
            data-aos="fade-right"
            data-aos-delay="300"
          >
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
      <section className="tt padding" id="roadmap">
        <h1 className="h1" data-aos="fade-down">
          Join our <span className="purple_text">Beta</span>
        </h1>

        <img
          className="roadmap"
          src={require("../assets/images/roadmap.svg").default}
          alt=""
        />
        {/* <div className="cards">
          <div className="card">
            <h3 className="title">BETA aLIST AICI FORM</h3>
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
        </div> */}
        {/* <h1 className="h1">
          Engage as <span className="green_text">You Glow</span>
        </h1> */}
      </section>

      <Cookies />
    </div>
  );
}

export default Home2;
