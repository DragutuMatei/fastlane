import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import Button3 from "./buttons/Button3";

function Navbar() {
  const [height, setHeight] = useState("0px");
  return (
    <nav>
      <div className="left">
        <img
          src={require("../assets/images/logo_full.svg").default}
          alt=""
          className="logo"
        />
      </div>
      <RxHamburgerMenu
        className="hamb"
        onClick={() => setHeight(height === "0px" ? "max-content" : "0px")}
      />
      <div className="right" style={{ height: height }}>
        {/* <div className="l">
          <div className="drop">
            <h4 className="button">
              Resources
              <span>
                <IoIosArrowDown />
              </span>
            </h4>
          </div>
          <div className="drop">
            <h4 className="button">
              Company
              <span>
                <IoIosArrowDown />
              </span>
            </h4>
          </div>
        </div> */}
        <div className="r">
          <a
            className="button r"
            href="https://t.me/fastlaneportal"
            target="_blank"
          >
            Join our community
          </a>
          <Button3 link={"https://docs.fastlane.buzz"}>
            <h4 className="button">Read our Gitbook</h4>
          </Button3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
