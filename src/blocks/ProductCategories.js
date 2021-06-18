import React from "react";
import { slides } from "../data/categoriesSlides";
import "../styles/ProductCategories.scss";
import { RightImage } from ".";

export default function ProductCategories() {
  const blocks = slides.map((s, idx) => {
    const facingLeft = idx % 2 === 0 ? false : true;
    return <RightImage data={s} left={facingLeft} />;
  });
  return <section id="categories">{blocks}</section>;
}
