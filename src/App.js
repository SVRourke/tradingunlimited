import React, { useEffect } from "react";
import { categories } from "./data/categoryContent";
import {
  Header,
  About,
  Brands,
  Logistics,
  PartnershipCta,
  Contact,
  Footer,
  SideImageSlim,
  MidImageFat,
  Partner,
} from "./blocks";

function App() {
  useEffect(() => {
    const header = document.querySelector("header");
    header.focus();
  }, []);

  return (
    <>
      <Header />
      <About />
      {/* <Brands /> */}
      <SideImageSlim id="firstSlide" data={categories["tv"]} right={false} />
      <MidImageFat data={categories["photography"]} />
      <SideImageSlim data={categories["audio"]} right={true} />
      <MidImageFat data={categories["gadgets"]} />
      <SideImageSlim id="lastSlide" data={categories["office"]} right={false} />
      <Logistics />
      {/* <Partner /> */}
      <PartnershipCta />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
