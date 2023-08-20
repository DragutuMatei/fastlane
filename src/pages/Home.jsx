import React from "react";
import "../assets/style/home.scss";
import Button1 from "../components/buttons/Button1";
import Button2 from "../components/buttons/Button2";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import Cookies from "../utils/Cookies";
import How from "../components/How";
function Home() {
  return (
    <>
      <section className="border">
        <div className="home">
          <div className="texts">
            <h2 className="h2">
              SHAPE THE FUTURE OF <br /> WEB3 COMMUNITIES
            </h2>
            <p className="p1">Maybe a motto, call to action, something...</p>
          </div>
        </div>
      </section>
      <section className="parts">
        <div className="part purple">
          <div className="texts">
            <h3 className="title">
              See how we are planning to shape the future of WEB3 Communities.
            </h3>
            <p className="p1">
              Here you can find all the information needed about the project.
            </p>
            <Button1>
              <h4 className="button">Check our WhitePaper</h4>
            </Button1>
          </div>
        </div>
        <div className="part green">
          <div className="texts">
            <h3 className="title">
              Exciting news! FASTLANE’s community is launching.{" "}
            </h3>
            <p className="p1">Be part of the movement!</p>
            <Button2>
              <h4 className="button">
                Join Community
                <span className="icon">
                  <AiOutlineArrowRight />
                </span>
              </h4>
            </Button2>
          </div>
        </div>
      </section>
      <section className="why_section">
        <h1 className="h1">
          WHY <span className="green_text"> CHOOSE US?</span>
        </h1>
        <div className="whys">
          <div className="col">
            <div className="why mixed">
              <h3 className="h2">INCENTIVIZED ENGAGEMENT</h3>
              <h4>Engage and reward</h4>
              <p>
                FastLane empowers community creators to incentivize meaningful
                engagement within their projects. By offering tangible rewards
                in the form of tokens, community members are motivated to
                participate actively and contribute constructively.
              </p>
              <p>
                This approach fosters a vibrant and committed user base that
                drives project growth.
              </p>
            </div>

            <div className="why mixed">
              <h3 className="h2">CUSTOMIZABLE ENGAGEMENT</h3>
              <h4>Tailored Interaction</h4>
              <p>
                With FastLane, creators can design tasks that align with their
                project's goals and values. This level of customization enables
                communities to cater to specific interests and ensure meaningful
                interactions.{" "}
              </p>
              <p>
                From social media engagement to more intricate contributions,
                FastLane adapts to diverse engagement requirements.
              </p>
            </div>
            <div className="why mixed">
              <h3 className="h2">TRANSPARENT & TRUSTWORTHY</h3>
              <h4>Decentralized Trust</h4>
              <p>
                FastLane operates on the Ethereum blockchain, ensuring
                transparency and security in task completion and token
                distribution. Smart contracts verify actions, reducing the risk
                of fraud or manipulation.
              </p>
              <p>
                Users can trust that their efforts will be fairly rewarded,
                enhancing the credibility of your community-driven platform.{" "}
              </p>
            </div>
            <div className="why mixed">
              <h3 className="h2">BULDING COMMUNITIES</h3>
              <h4>Community Building </h4>
              <p>
                FastLane encourages the formation of dedicated communities
                rather than just accumulating users. The delayed token release
                mechanism ensures users are genuinely interested in the
                project's success, fostering a passionate and committed user
                base
              </p>
              <p>
                {" "}
                This organic growth leads to more meaningful collaborations and
                value creations.
              </p>
            </div>
          </div>
          <img
            className="col imd"
            src={require("../assets/images/Banner_12c.png")}
            alt=""
          />
        </div>
      </section>
      <section className="how_section">
        <h1 className="h1">
          HOW <span className="purple_text"> IT WORKS?</span>
        </h1>
        <div className="hows">
          <How
            q="Task Creation and Token Allocation"
            a1t="Project Creation"
            a1d="Community founders create a board with tasks tailored to their project's needs."
            a2t="Task Details"
            a2d="Tasks are defined with instructions, deadlines, and base token rewards."
            a3t="Token Allocation"
            a3d="Tokens are reserved for the board, ensuring rewards are available when tasks are completed."
          />
          <How
            q="Task Creation and Token Allocation"
            a1t="Project Creation"
            a1d="Community founders create a board with tasks tailored to their project's needs."
            a2t="Task Details"
            a2d="Tasks are defined with instructions, deadlines, and base token rewards."
            a3t="Token Allocation"
            a3d="Tokens are reserved for the board, ensuring rewards are available when tasks are completed."
          />
          <How
            q="Task Creation and Token Allocation"
            a1t="Project Creation"
            a1d="Community founders create a board with tasks tailored to their project's needs."
            a2t="Task Details"
            a2d="Tasks are defined with instructions, deadlines, and base token rewards."
            a3t="Token Allocation"
            a3d="Tokens are reserved for the board, ensuring rewards are available when tasks are completed."
          />
          <How
            q="Task Creation and Token Allocation"
            a1t="Project Creation"
            a1d="Community founders create a board with tasks tailored to their project's needs."
            a2t="Task Details"
            a2d="Tasks are defined with instructions, deadlines, and base token rewards."
            a3t="Token Allocation"
            a3d="Tokens are reserved for the board, ensuring rewards are available when tasks are completed."
          />
        </div>
      </section>

      <section className="border">
        <div className="home">
          <div className="abs">
            <IoIosArrowRoundForward />
          </div>
          <div className="texts">
            <h2 className="h2">FAQ SECTION</h2>
            <p className="p1">Maybe a motto, call to action, something...</p>
          </div>
        </div>
      </section>
      <section className="never">
        <h1 className="h1">
          NEVER <span>MISS A DROP!</span>
        </h1>
        <p className="title">
          Subscribe to our super-rare and exclusive drops & collectibles.
        </p>
        <div className="r">
          <input type="text" placeholder="Enter your email address" />
          <Button1>
            <h4 className="button">Subscribe</h4>
          </Button1>
        </div>
      </section>
      <Cookies />
    </>
  );
}

export default Home;
