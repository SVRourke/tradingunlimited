import React from "react";
import Logo from "../assets/top-logo.png";
import Words from "../assets/trading-words.png";
import "../styles/Header.scss";
import BadgeText from "../components/BadgeText";
export default function Header() {
  return (
    <header id="header" className={"block_full-screen"}>
      <section className={"navbar"}>
        <img src={Logo} />

        <nav>
          <a href="#about">About</a>
          <a href="#brands">Brands</a>
          <a href="#categories">Products</a>
          <a href="#partnerCta">Partner</a>
          <a href="#contact">Contact</a>
        </nav>
      </section>

      <section className={"header_content"}>
        <div className={"column"}>
          <img src={Words} />

          <div>
            <a href="#about" className="header-buttons">
              Learn More
            </a>
            <a href="#partnerCta" className="header-buttons">
              Partner With Us
            </a>
          </div>
        </div>

        <div className={"column"}>
          <video
            muted
            autoPlay
            loop
            className="headerVid"
            style={{ background: "black" }}
          >
            <source
              src="https://ik.imagekit.io/ultimatec/video_b8MieOF-0.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className={"header_phone"}>
        <a href="tel:9547830100">
          <BadgeText icon={"BsPhone"} text={"call 1+ 954-783-0100"} />
        </a>
      </section>
    </header>
  );
}
