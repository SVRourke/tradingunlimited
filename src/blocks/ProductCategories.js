import React, { useState, useEffect } from "react";
import { BsPhone, BsEnvelopeOpen, BsShieldLock } from "react-icons/bs";
import BadgeText from "../components/BadgeText";

import { slides } from "../data/categoriesSlides";

import "../styles/ProductCategories.scss";

const CategorySlide = ({ slide }) => {
  return (
    <div id="category-slide" className={"row"}>
      <div className={"column"}>
        <div
          className={"img"}
          style={{ backgroundImage: `url("${slide.img}")` }}
        />
      </div>

      <div className={"column"}>
        <p className={"blue-tab"}>{slide.tab}</p>
        <h2 className={"big-title"}>{slide.title}</h2>
        <p>{slide.blurb}</p>

        <section className={"badge-section"}>
          <BadgeText icon={"BsPhone"} text={"+1 954-783-0400"} />
          <BadgeText icon={"BsEnvelopeOpen"} text={"send us a message!"} />
          <BadgeText icon={"BsShieldLock"} text={"Authorized Dealer"} />
        </section>
      </div>
    </div>
  );
};

export default function ProductCategories() {
  const [slideIdx, setSlide] = useState(0);

  const slideCards = slides.map((s) => <CategorySlide slide={s} />);
  let slide = slideCards[slideIdx];

  const headings = slides.map((s) => (
    <button className={"control-button"}>{s.tab}</button>
  ));

  const nextSlide = () => {
    console.log("NEXT SLIDE");
    slideIdx < slides.length - 1 ? setSlide(slideIdx + 1) : setSlide(0);
  };

  const prevSlide = () => {
    slideIdx > 0 ? setSlide(slideIdx - 1) : setSlide(slides.length - 1);
  };

  useEffect(() => {
    setTimeout(nextSlide, 3000);
  }, [slideIdx]);

  return (
    <section id="categories" className={"block_full-screen"}>
      {slide}

      {/* <div className={"row"}>
        {headings}
        <button className={"control-button"} onClick={nextSlide}>next</button>
      </div> */}
    </section>
  );
}
