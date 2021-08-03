import React from "react";
import "../styles/components/_sideimageslim.scss";
export default function SideImageSlim({
  right,
  data: { title, description, img },
}) {
  const computedClassName = right ? "right-facing" : "left-facing";

  return (
    <section className={`side-image-slim ${computedClassName}`}>
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
    </section>
  );
}
