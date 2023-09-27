import React from "react";

function Button1({ children, link }) {
  return <a href={link} target="_blank" className="button but1">{children}</a>;
}

export default Button1;
