import React, { useEffect } from "react";
import { slides } from "./data/categoriesSlides";
import {
  Header,
  About,
  Brands,
  Logistics,
  PartnershipCta,
  RightImage,
  Contact,
  Footer,
  CategoryCarousel,
} from "./blocks";

function App() {
  const blocks = slides.map((s, idx) => {
    const facingLeft = idx % 2 === 0 ? false : true;
    return <RightImage data={s} left={facingLeft} />;
  });

  useEffect(() => {
    const header = document.querySelector("header");
    header.focus();
  }, []);

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
