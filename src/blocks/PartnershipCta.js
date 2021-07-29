import React from "react";
import { ReactComponent as Separator } from "../assets/separator.svg";
import "../styles/layout/_partnershipcta.scss";

export default function PartnershipCta() {
  return (
    <section id="partnerCta" className={"block snap-start"}>
      <Separator />

      <div className={"partner-content"}>
        <h2 className={"big-title"}>Become a Partner</h2>
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
