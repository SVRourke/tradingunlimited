import React from "react";

import "../styles/About.scss";
import location from "../assets/location.jpg";
import BadgeText from "../components/BadgeText";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <section id="about" className={"block_full-screen about-block snap-start"}>
      <section className={"row"}>
        <Fade left>
          <div className={"column"}>
            <p className={"blue-tab"}>About Us</p>
            <h2 className={"big-title"}>
              17 Years of <span className={"blue-text"}>Experience</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              placerat auctor cursus. Phasellus est ex, vehicula non ultricies
              at, pretium ac lacus. Sed luctus nibh eu dui rhoncus pretium. In
              dui sapien, faucibus nec porttitor non, pretium ut est. Sed nisi
              felis, luctus quis molestie at, blandit ut velit. Aenean sit amet
              efficitur diam.
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
