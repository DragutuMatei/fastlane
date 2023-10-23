import React, { useEffect, useState } from "react";
import "../assets/style/home2.scss";
import Button2 from "../components/buttons/Button2";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button1 from "../components/buttons/Button1";
import Button3 from "../components/buttons/Button3";
import Cookies from "../utils/Cookies";
import AOS from "aos";
import "aos/dist/aos.css";
import Firestore from "../utils/Firestore";
import { async } from "@firebase/util";
const fire = new Firestore();
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

  const [b1, setb1] = useState(550);
  const [b2, setb2] = useState(300);
  const [b3, setb3] = useState(700);
  const [b4, setb4] = useState(1500);
  const [b5, setb5] = useState(120);
  const [b6, setb6] = useState(550);
  const [b7, setb7] = useState(550);
  const [b8, setb8] = useState(550);
  const [b9, setb9] = useState(550);
  const [b10, setb10] = useState(550);

  useEffect(() => {
    var lastScrollTop = 0;
    const onScroll = (e) => {
      var st = document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setb1((old) => old - 2);
        setb2((old) => old - 3);
        setb3((old) => old - 1.4);
        setb4((old) => old - 2);
        setb5((old) => old + 2);
      } else if (st < lastScrollTop) {
        setb1((old) => old + 2);
        setb2((old) => old + 3);
        setb3((old) => old + 1.4);
        setb4((old) => old + 2);
        setb5((old) => old - 2);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const tweetText = `I applied for beta access on the fastlane app.

Apply now: fastlane.buzz
 
Engage. Grow. Evolve.`;
  const handleTweetButtonClick = () => {
    console.log(tweetText);
    const tweetIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetIntentUrl, "_blank");
  };

  const [username, setUsername] = useState("");
  const [msg, setMsg] = useState("");
  const [enrolled, setEnrolled] = useState(false);
  const enroll = async (username) => {
    if (username != "")
      await fire
        .addItem("users", { username })
        .then((res) => {
          console.log(res);
          if (!res) {
            setMsg("User already enrolled!");
            setEnrolled(false);
          } else {
            setMsg(
              "Congratulations on taking the bold step into the Fastlane universe! The beta journey has just begun."
            );
            setEnrolled(true);
            handleTweetButtonClick();
          }
        })
        .catch((error) => console.log(error));
  };
  return (
    <div className="aa">
      <div className="background"></div>
      <img
        src={require("../assets/images/bila1.png")}
        className="b b1"
        style={{ top: b1 }}
        alt=""
      />
      <img
        src={require("../assets/images/bila2.png")}
        className="b b2"
        style={{ left: b2 }}
        alt=""
      />
      <img
        src={require("../assets/images/bila3.png")}
        className="b b3"
        style={{ top: b3 }}
        alt=""
      />
      <img
        src={require("../assets/images/bila4.png")}
        className="b b4"
        style={{ top: b4 }}
        alt=""
      />
      <img
        src={require("../assets/images/bila5.png")}
        className="b b5"
        style={{ left: b5 }}
        alt=""
      />
      {/* <img src={require("../assets/images/bila6.png")} className="b b6" alt="" />
      <img src={require("../assets/images/bila7.png")} className="b b7" alt="" />
      <img src={require("../assets/images/bila8.png")} className="b b8" alt="" />
      <img src={require("../assets/images/bila9.png")} className="b b9" alt="" /> */}
      <img
        src={require("../assets/images/bila10.png")}
        className="b10"
        alt=""
      />
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
              <a
                href="https://t.me/fastlaneportal"
                data-aos="fade-left"
                target="_blank"
                data-aos-delay="550"
                className="button"
              >
                Join our community
                <span className="icon">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </Button2>
            {/*
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@twitter"
            />
*/}
            <Button1
              onClick={() => {
                handleTweetButtonClick();
              }}
            >
              <h4 className="button">Apply for BETA access</h4>
            </Button1>
            {msg != "" && <p className="p1">{msg}</p>}
            {enrolled && (
              <></>
              // <Button1
              //   onClick={() => {
              //     handleTweetButtonClick();
              //   }}
              // >
              //   <h4 className="button">
              //     Tweet this
              //     {/* Apply for BETA access */}
              //     <span className="icon">
              //       <AiOutlineArrowRight />
              //     </span>
              //   </h4>
              // </Button1>
            )}
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
                  Start by creating a board on our platform. This board will
                  serve as a centralized hub for all your activities.
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
                  Asign rewards
                </h3>
                <p className="p1">
                  Add FS Tokens to your balance before proceeding to allocate
                  them for each individual task.
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
                <p className="p1">
                  Integrating FastLane with platforms such, as Discord, Telegram
                  and Twitter, makes it easier to validate and engage with
                  tasks.
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
                <h3 className="title">
                  <img
                    style={{ width: 30 }}
                    src={require("../assets/images/icon_logo.svg").default}
                    alt=""
                  />
                  FastLane: your Reliable Platform for Community Engagement
                </h3>
                <h4 className="p1">
                  At <span className="green_text">FastLane</span> we truly stand
                  out in the changing world for many reasons. We take pride in
                  being the platform you can rely on for community engagement
                  offering a range of tools that set us apart.
                </h4>
              </div>
            </div>
            <div
              className="borders purple"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="card">
                <h3 className="title">
                  <img
                    style={{ width: 30 }}
                    src={require("../assets/images/icon_logo.svg").default}
                    alt=""
                  />
                  Foster Genuine Interactions and Accelerate Growth with
                  FastLane
                </h3>
                <h4 className="p1">
                  <span className="green_text">FastLane</span> is a tool that
                  can be used in various ways to foster genuine interactions
                  reward active participation and accelerate community growth.
                </h4>
              </div>
            </div>
            <div
              className="borders purple"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="card">
                <h3 className="title">
                  <img
                    style={{ width: 30 }}
                    src={require("../assets/images/icon_logo.svg").default}
                    alt=""
                  />
                  Boost Community Involvement with FS Token Rewards
                </h3>
                <h4 className="p1">
                  With <span className="green_text">FastLane</span>, members
                  receive token rewards that ensure their contributions are
                  recognized ultimately boosting community involvement.
                </h4>
              </div>
            </div>{" "}
            <div
              className="borders purple"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="card">
                <h3 className="title">
                  {" "}
                  <img
                    style={{ width: 30 }}
                    src={require("../assets/images/icon_logo.svg").default}
                    alt=""
                  />
                  Nurture Growth and Development
                </h3>
                <h4 className="p1">
                  Our focus goes beyond creating communities; we also strive to
                  nurture their growth and development. We prioritize
                  interactions and shared goals. By providing features, like
                  community creation and the campaign board{" "}
                  <span className="green_text">FastLane</span> guarantees a
                  engaged and satisfied community.
                </h4>
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
            <span className="purple_text">Roadmap</span>
          </h1>

          {/* <img
            className="roadmap"
            src={require("../assets/images/roadmap.svg").default}
            alt=""
          /> */}
          <div className="cards">
            {/* <div className="card">
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
          </div> */}
            <div className="card complete" data-aos="fade-right">
              <h3 className="bold_p">Completed</h3>
              <h3 className="title">Branding and Concept</h3>
              <p className="p1">
                Design brand kit. Develop website and mockup.
              </p>
              {/* <div className="line"></div>
              <h3 className="title">Beta Launch</h3>
              <p className="p1">
                Roll out the FastLane platform in Beta, allowing for testing and
                refining of features.
              </p> */}
            </div>
            <div className="card in_complete" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">Community Growth</h3>
              <p className="p1">
                The primary focus is on building and growing the FastLane
                community.
              </p>
              {/* <div className="line"></div>
              <h3 className="title">Onboard New Projects in Beta Phase</h3>
              <p className="p1">
                Encourage project founders to join the platform during the beta
                phase, enabling them to create and manage communities.
              </p> */}
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">Beta Launch</h3>
              <p className="p1">
                Roll out the FastLane platform in Beta, allowing for testing and
                refining of features.
              </p>
              {/* <div className="line"></div>
              <ul>
                <li>Branding and Concept</li>
                <li>Design FastLane Web App</li>
                <li>Strategies and Structures</li>
              </ul> */}
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">Enroll Beta Users</h3>
              <p className="p1">
                Invite early users to participate in the beta testing phase,
                gathering valuable feedback and insights.
              </p>
              {/* <div className="line"></div>
              <h3 className="title">
                Scoring System for Social Media Profiles
              </h3>
              <p className="p1">
                Implement a scoring system that evaluates and ranks users'
                social media profiles based on their engagement and
                contributions within FastLane communities.Provide transparent
                scoring criteria to ensure fairness and transparency.
              </p>{" "} */}
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">Onboard New Projects in Beta Phase</h3>
              <p className="p1">
                Encourage project founders to join the platform during the beta
                phase, enabling them to create and manage communities.
              </p>
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">Token Launch</h3>
              <p className="p1">
                Introduce the FS Token to the community, explaining its utility
                and role in incentivizing engagement.
              </p>
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">Platform Enhancement and Expansion</h3>
              <p className="p1">
                Aim to list the FS Token on popular cryptocurrency exchanges
                (CEXs) to increase accessibility and liquidity.
              </p>
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">
                Scoring System for Social Media Profiles
              </h3>
              <p className="p1">
                Implement a scoring system that evaluates and ranks users'
                social media profiles based on their social engagement and
                contribution to prevent botting and manipulation.
              </p>
            </div>
            <div className="card" data-aos="fade-right">
              <h3 className="bold_p">Pending</h3>
              <h3 className="title">AI Scoring for Onchain User Data</h3>
              <p className="p1">
                Integrate AI-driven algorithms to analyze onchain user data,
                allowing for deeper insights into user behavior in order to rule
                out bots or sybils.
              </p>
            </div>
            <div
              className="card spec"
              style={{ height: "339px" }}
              data-aos="fade-right"
            ></div>{" "}
            <div
              className="card spec"
              style={{ height: "339px" }}
              data-aos="fade-right"
            ></div>
          </div>
          {/* <h1 className="h1">
          Engage as <span className="green_text">You Glow</span>
        </h1> */}
        </section>

        <Cookies />
      </div>
    </div>
  );
}

export default Home2;
