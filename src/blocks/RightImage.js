import React from "react";
import Fade from "react-reveal/Fade";
import "../styles/RightImage.scss";
import "../styles/ProductCategories.scss";

const conditionalStyle = (props) => {
  return {
    flexDirection: props ? "row-reverse" : "row",
  };
};

export default function RightImage({ data: { title, blurb, img }, left }) {
  const textStyles = {
    textAlign: left ? "right" : "left",
  };

  return (
    <section className=" block-column rightImage snap-start">
      <div className="row " style={conditionalStyle(left)}>
        <Fade left={!left} right={left} delay={200} duration={300}>
          <div className="column">
            <img src={img} />
          </div>
        </Fade>

        <Fade left={left} right={!left} delay={200} duration={300}>
          <div className="block-column" style={textStyles}>
            <h1 className={"block-title"}>{title}</h1>
            <p>{blurb}</p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
