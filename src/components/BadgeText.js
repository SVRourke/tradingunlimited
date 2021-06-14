import React from "react";

import * as bs from "react-icons/bs";

export default function BadgeText({ icon, text, color }) {
  return (
    <div className={"badge"}>
      {React.createElement(bs[icon], [{ class: "badge-icon" }])}
      <p>{text}</p>
    </div>
  );
}
