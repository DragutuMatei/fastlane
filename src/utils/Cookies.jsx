import React, { useState } from "react";
import Button2 from "../components/buttons/Button2";
import "../assets/style/cookies.scss";
function Cookies() {
  const [display, setDisplay] = useState("flex");
  return (
    <section className="cookies" style={{ display: display }}>
      <p className="bold_p">Your privacy</p>
      <p className="p2">
        We and <span>our partners</span> save information on your device to
        offer a customized experience and enable visitor statistics. You decide
        which type of cookies you accept in addition to the necessary ones
        needed for the website to work. You may change your settings at any time
        by clicking on{" "}
        <span>
          <a href="#">Cookie preferences</a>
        </span>{" "}
        in the footer.
      </p>
      <p className="p2">
        See our{" "}
        <span>
          <a href="#">Cookie Policy </a>
        </span>{" "}
        for more info.
      </p>
      <div className="buts">
        <Button2>
          <h4
            className="button"
            onClick={() => {
              setDisplay("none");
            }}
          >
            Accept all
          </h4>
        </Button2>
        <a className="button" href="#">
          Only necessary
        </a>
        <a className="button" href="#">
          Customize
        </a>
      </div>
    </section>
  );
}

export default Cookies;
