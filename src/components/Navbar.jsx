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
          src={require("../assets/images/text_logo.svg").default}
          alt=""
          className="logo"
        />
      </div>
      <RxHamburgerMenu
        className="hamb"
        onClick={() => setHeight(height === "0px" ? "max-content" : "0px")}
      />
      <div className="right" style={{ height: height }}>
        <div className="l">
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
        </div>
        <div className="r">
          <h4 className="button r">Join our community</h4>
          <Button3>
            <h4 className="button">Read our Gitbook</h4>
          </Button3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
