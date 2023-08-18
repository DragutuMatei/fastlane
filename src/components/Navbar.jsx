import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Button3 from "./buttons/Button3";

function Navbar() {
  return (
    <nav>
      <div className="left">
        <img
          className="logo"
          src={require("../assets/images/logo_full.png")}
          alt=""
        />
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
      <div className="right">
        <h4 className="button">Join our community</h4>
        <Button3>
          <h4 className="button">Read our WhitePaper</h4>
        </Button3>
      </div>
    </nav>
  );
}

export default Navbar;
