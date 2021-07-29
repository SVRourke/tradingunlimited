import React from "react";
import "../styles/components/_sideimageslim.scss";
export default function SideImageSlim({
  right,
  data: { title, description, img },
}) {
  const extraStyle = !right ? null : { gridTemplateColumns: "2fr 1fr" };

  const leftPos = {
    gridArea: "left",
  };

  const rightPos = {
    gridArea: "right",
  };

  return (
    <section className="side-image-slim" style={extraStyle}>
      <div className="text-box" style={right ? rightPos : leftPos}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
        className="side-image"
        style={{
          backgroundImage: `url(${img})`,
          gridArea: right ? "left" : "right",
        }}
      ></div>
    </section>
  );
}
