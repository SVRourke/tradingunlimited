import React from "react";
import "../styles/components/_sideimageslim.scss";
export default function SideImageSlim({
  id,
  right,
  data: { title, description, img, img2 },
}) {
  const computedClassName = right ? "right-facing" : "left-facing";

  return (
    <section id={id || null} className={`side-image-slim ${computedClassName}`}>
      <div className="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div
        className="side-image"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div
        className="small-image"
        style={{
          backgroundImage: `url(${img2})`,
        }}
      ></div>
    </section>
  );
}
