import React from "react";
import "../styles/layout/_categorycarousel.scss";

export default function CategoryCarousel() {
  return (
    <section id="categorycarousel">
      <div className="ccimgph">.</div>
      <div className="categorycarousel-texts">
        <h3>
          Tv &<br />
          Home Theater
        </h3>
        <div id="vertical-divider">.</div>
        <p>
          Est do aliquip adipisicing ut incididunt dolore. Cillum pariatur
          proident et consectetur. Officia velit reprehenderit sit voluptate
          elit aute dolor magna cillum sint pariatur ex esse ut.Sunt proident
          pariatur voluptate cillum in elit est cillum sunt consequat sint
          deserunt velit quis.
        </p>
      </div>
      <div id="progress-markers">
        <div className="progress-marker"></div>
        <div className="progress-marker"></div>
        <div className="progress-marker"></div>
        <div className="progress-marker active"></div>
        <div className="progress-marker"></div>
      </div>
    </section>
  );
}
