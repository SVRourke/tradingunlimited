import React from "react";
import { BsPhone, BsEnvelopeOpen, BsMap, BsStopwatch, BsLayersHalf, BsBoundingBox } from "react-icons/bs";
import location from "../assets/location.jpg";
import "../styles/About.scss";

export default function About() {
  return (
    <section id="about" className={"block_full-screen about-block"}>
      <section className={"row"}>
        <div className={"column"}>
          <p className={"blue-tab"}>About Us</p>
          <h2 className={"big-title"}>
            17 Years of <span className={"blue-text"}>Experience</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
            auctor cursus. Phasellus est ex, vehicula non ultricies at, pretium
            ac lacus. Sed luctus nibh eu dui rhoncus pretium. In dui sapien,
            faucibus nec porttitor non, pretium ut est. Sed nisi felis, luctus
            quis molestie at, blandit ut velit. Aenean sit amet efficitur diam.
          </p>

          <div className={"badge-grid"}>
            <div className={"badge"}>
              <BsMap className={"badge-icon"} />
              <p>Hollywood FL, USA</p>
            </div>

            <div className={"badge"}>
              <BsStopwatch className={"badge-icon"} />
              <p>Orders Shipped Daily</p>
            </div>

            <div className={"badge"}>
              <BsPhone className={"badge-icon"} />
              <p>+1 954-783-0400</p>
            </div>

            <div className={"badge"}>
              <BsLayersHalf className={"badge-icon"} />
              <p>Multi Channel</p>
            </div>

            <div className={"badge"}>
              <BsEnvelopeOpen className={"badge-icon"} />
              <p>send us a message!</p>
            </div>

            <div className={"badge"}>
              <BsBoundingBox className={"badge-icon"} />
              <p>Multi Warehouse</p>
            </div>

          </div>
        </div>

        <div className={"column"}>
          <div className={"building-image-backdrop"}>
            <div
              className={"building-image"}
              style={{ backgroundImage: `url(${location})` }}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
