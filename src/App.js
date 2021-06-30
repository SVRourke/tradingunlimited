import React from "react";
import { slides } from "./data/categoriesSlides";
import {
  Header,
  About,
  Brands,
  ProductCategories,
  Logistics,
  PartnershipCta,
  RightImage,
  Contact,
  Footer,
} from "./blocks";

function App() {
  const blocks = slides.map((s, idx) => {
    const facingLeft = idx % 2 === 0 ? false : true;
    return <RightImage data={s} left={facingLeft} />;
  });

  window.addEventListener("wheel", (e) => {
    const direction = e.deltaY > 0 ? 1 : -1;
    window.scrollBy({
      left: 0,
      top: direction * 200,
      behavior: "smooth",
    });
  });

  return (
    <>
      <Header />
      <About />
      <Brands />
      {blocks}
      <Logistics />
      <PartnershipCta />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
