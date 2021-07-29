import React from "react";
import "../styles/components/_slide.scss";

import { ReactComponent as Apple } from "../assets/brands/apple.svg";
import { ReactComponent as Garmin } from "../assets/brands/garmin.svg";
import { ReactComponent as Hp } from "../assets/brands/hp.svg";
import { ReactComponent as Leica } from "../assets/brands/leica.svg";
import { ReactComponent as Lg } from "../assets/brands/lg.svg";
import { ReactComponent as Microsoft } from "../assets/brands/microsoft.svg";
import { ReactComponent as Samsung } from "../assets/brands/samsung.svg";

const Slider = () => {
  return (
    <div id="slider">
      <div className={"slide"}>
        <Apple />
      </div>

      <div className={"slide"}>
        <Garmin />
      </div>

      <div className={"slide"}>
        <Apple />
      </div>

      <div className={"slide"}>
        <Hp />
      </div>

      <div className={"slide"}>
        <Garmin />
      </div>

      <div className={"slide"}>
        <Leica />
      </div>

      <div className={"slide"}>
        <Hp />
      </div>

      <div className={"slide"}>
        <Lg />
      </div>

      <div className={"slide"}>
        <Leica />
      </div>

      <div className={"slide"}>
        <Microsoft />
      </div>

      <div className={"slide"}>
        <Lg />
      </div>

      <div className={"slide"}>
        <Samsung />
      </div>

      <div className={"slide"}>
        <Microsoft />
      </div>

      <div className={"slide"}>
        <Samsung />
      </div>
    </div>
  );
};

export default Slider;
