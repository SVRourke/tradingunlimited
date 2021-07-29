import React from "react";
import "../styles/layout/_brands.scss";
import Slider from "../components/Slider";
import Fade from "react-reveal/Fade";

export default function Brands() {
  return (
    <Fade upin delay={400}>
      <section id="brands" className={"block_full-screen snap-center"}>
        <h2 className={"big-title"}>Our Brand Partners</h2>
        <p>
          At Trading Unlimited we're proud to be authorized distributors of some
          of the top brands in the industry. Whether you're looking for; a
          high-speed lens for professional sports photography, a pair of
          headphones or the latest 8K TVs Trading Unlimited has what you need.
        </p>

        <Slider />
      </section>
    </Fade>
  );
}
