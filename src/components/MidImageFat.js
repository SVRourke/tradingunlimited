import React from "react";
import "../styles/components/_midimagefat.scss";
export default function MidImageFat({
  data: { title, description, img1, img2, img3 },
}) {
  const setBackground = (url) => ({
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  });

  return (
    <section className="mid-image-fat">
      <div className="mid-left-image" style={setBackground(img1)}></div>
      <div className="text-box">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="mid-center-image" style={setBackground(img2)}></div>
      <div className="mid-right-image" style={setBackground(img3)}></div>
    </section>
  );
}
