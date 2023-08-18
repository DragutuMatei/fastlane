import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
function How({ q, a1t, a1d, a2t, a2d, a3t, a3d }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="how mixed">
      <div className="q" onClick={() => setOpened(!opened)}>
        <h3 className="h3">
          <span>{opened ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          {q}
        </h3>
      </div>
      {opened && (
        <div className="as">
          <div className="a">
            <h3 className="title">{a1t}</h3>
            <p className="p1">{a1d}</p>
          </div>
          <div className="a">
            <h3 className="title">{a2t}</h3>
            <p className="p1">{a2d}</p>
          </div>
          <div className="a">
            <h3 className="title">{a3t}</h3>
            <p className="p1">{a3d}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default How;
