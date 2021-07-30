import React, { useEffect } from "react";
import { slides } from "./data/categoriesSlides";
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
      <Brands />
      <SideImageSlim data={categories["tv"]} right={false} />
      <MidImageFat data={categories["photography"]} />
      <SideImageSlim data={categories["audio"]} right={true} />
      <MidImageFat data={categories["gadgets"]} />
      <SideImageSlim data={categories["office"]} right={false} />
      <Logistics />
      <PartnershipCta />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
