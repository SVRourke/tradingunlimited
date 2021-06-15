import React from "react";
import topLogo from "../assets/top-logo.png";
import "../styles/Footer.scss";
import BadgeText from "../components/BadgeText";

export default function Footer() {
  return (
    <footer id="footer" className={"block"}>
      <img src={topLogo} />

      <nav>
        <a href="#header">Home</a>
        <a href="#about">About</a>
        <a href="#brands">Partners</a>
      </nav>

      <nav>
        <a href="#categories">Products</a>
        <a href="#logistics">Logistics</a>
        <a href="#partnerCta">Become A Distributor</a>
      </nav>

      <div className="badges">
        <BadgeText icon={"BsMap"} text={"Hollywood FL, USA"} />

        <a href="tel:9547830100">
          <BadgeText icon={"BsPhone"} text={"+1 954-783-0100"} />
        </a>

        <a href={"mailto:contact@tradingunlimited.com"}>
          <BadgeText icon={"BsEnvelopeOpen"} text={"send us a message!"} />
        </a>
      </div>
    </footer>
  );
}
