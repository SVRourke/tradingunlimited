import React from "react";
import Logo from "../assets/top-logo.png";
import Words from "../assets/trading-words.png";
import "../styles/Header.scss";
import BadgeText from "../components/BadgeText";
import Fade from "react-reveal/Fade";

export default function Header() {
  return (
    <header id="header" className={"block_full-screen snap-start"}>
      <Fade down>
        <section className={"navbar"}>
          <img alt="trading unlimited" src={Logo} />

          <nav>
            <a href="#about">About</a>
            <a href="#brands">Brands</a>
            <a href="#categories">Products</a>
            <a href="#partnerCta">Partner</a>
            <a href="#contact">Contact</a>
          </nav>
        </section>
      </Fade>

      <section className={"header_content"}>
        <Fade up delay={300} duration={900}>
          <div className={"column"}>
            <img alt="trading unlimited" src={Words} />

            <Fade up delay={800} duration={1000}>
              <div>
                <a href="#about" className="header-buttons">
                  Learn More
                </a>
                <a href="#partnerCta" className="header-buttons">
                  Partner With Us
                </a>
              </div>
            </Fade>
          </div>
        </Fade>

        <Fade down delay={300} duration={900}>
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
        </Fade>
      </section>

      <Fade right>
        <section className={"header_phone"}>
          <a href="tel:9547830100">
            <BadgeText icon={"BsPhone"} text={"call 1+ 954-783-0100"} />
          </a>
        </section>
      </Fade>
    </header>
  );
}
