import React from "react";

import "../styles/About.scss";
import location from "../assets/location.jpg";
import BadgeText from "../components/BadgeText";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <section id="about" className={"block_full-screen about-block snap-center"}>
      <section className={"row"}>
        <Fade left>
          <div className={"column"}>
            <p className={"blue-tab"}>About Us</p>
            <h2 className={"big-title"}>
              17 Years of <span className={"blue-text"}>Experience</span>
            </h2>
            <p style={{ marginBottom: "1rem", textAlign: "justify" }}>
              For the past 17 years trading unlimited has been serving
              customers, first from a physical store and later adapting to
              become one of the leading online distributors of consumer
              electronics.
            </p>
            <p style={{ textAlign: "justify" }}>
              Our success is the result of our dedication to building
              relationships with our partners and customers. Our tremendous
              buying power and multiple warehouses allow us to take advantage of
              any opportunity that arises.
            </p>

            <div className={"badge-grid"}>
              <Fade up delay={800}>
                <BadgeText icon={"BsMap"} text={"Hollywood FL, USA"} />
              </Fade>
              <Fade up delay={800}>
                <BadgeText icon={"BsStopwatch"} text={"Orders Shipped Daily"} />
              </Fade>
              <Fade up delay={1100}>
                <BadgeText icon={"BsPhone"} text={"+1 954-783-0400"} />
              </Fade>
              <Fade up delay={1100}>
                <BadgeText icon={"BsLayersHalf"} text={"Multi Channel"} />
              </Fade>
              <Fade up delay={1400}>
                <BadgeText
                  icon={"BsEnvelopeOpen"}
                  text={"send us a message!"}
                />
              </Fade>
              <Fade up delay={1400}>
                <BadgeText icon={"BsBoundingBox"} text={"Multi Warehouse"} />
              </Fade>
            </div>
          </div>
        </Fade>

        <Fade down>
          <div className={"column"}>
            <div className={"building-image-backdrop"}>
              <div
                className={"building-image"}
                style={{ backgroundImage: `url(${location})` }}
              />
            </div>
          </div>
        </Fade>
      </section>
    </section>
  );
}
