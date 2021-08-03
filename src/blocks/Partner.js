import React from "react";
import "../styles/components/_partner.scss";

export default function Partner() {
  return (
    <section id="partner">
      {/* <video
        muted
        autoPlay
        loop
        className="headerVid"
        style={{ background: "black" }}
      >
        <source
          src="https://ik.imagekit.io/ultimatec/blurrytruck_AQyHmlFh5of.mp4"
          type="video/mp4"
        />
      </video> */}
      <div className="video-overlay">
        <h2>Partner with us.</h2>
        <p>
          At Trading Unlimited We're always looking for new ways to expand our
          business. Whether through new partnerships, products or channels of
          distribution. If you think you could benefit from our buying power or
          17 years of experience become a partner.
        </p>
        <div className={"row"}>
          <a
            href="https://drive.google.com/uc?id=1gHwrCDP1_CjCPxWScsHXMyZw9MY2hbUy&export=download"
            download
          >
            Download an Application
          </a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </section>
  );
}
