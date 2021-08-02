import React from "react";
import "../styles/layout/_brands.scss";
import Slider from "../components/Slider";
import Fade from "react-reveal/Fade";

export default function Brands() {
  return (
    <Fade upin delay={400}>
      <section id="brands" className={"block_full-screen snap-center"}>
        <Slider />
      </section>
    </Fade>
  );
}
