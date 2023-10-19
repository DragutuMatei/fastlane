import React from "react";

function Button1({ children, link, onClick }) {
  return <a href={link} target="_blank" onClick={onClick} className="button but1">{children}</a>;
}

export default Button1;
