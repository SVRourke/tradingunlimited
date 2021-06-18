import React from "react";
import "../styles/PartnershipCta.scss";
import { ReactComponent as Separator } from "../assets/separator.svg";

export default function PartnershipCta() {
  return (
    <section id="partnerCta" className={"block snap-start"}>
      <Separator />

      <div className={"partner-content"}>
        <h2 className={"big-title"}>Become a Partner</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          auctor cursus. Phasellus est ex, vehicula non ultricies at, pretium ac
          lacus.
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
