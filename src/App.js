import React from "react";
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
} from "./blocks";

function App() {
  const blocks = slides.map((s, idx) => {
    const facingLeft = idx % 2 === 0 ? false : true;
    return <RightImage data={s} left={facingLeft} />;
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
