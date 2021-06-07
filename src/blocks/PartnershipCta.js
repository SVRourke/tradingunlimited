import React from "react";
import "../styles/PartnershipCta.scss";

export default function PartnershipCta() {
  return (
    <section id="partnerCta" className={"block"}>
      <svg viewBox="0 0 800 59">
        <g transform="matrix(1,0,0,1,6.57252e-14,-329)">
          <g transform="matrix(1.00766,0,0,1.08407,-2.46102,-27.6597)">
            <path
              d="M796.36,329.001L2.442,329.001L2.442,357.597C398.644,445.28 398.412,271.416 796.36,357.597L796.36,329.001Z"
            />
          </g>
        </g>
      </svg>

      <div className={'partner-content'}>
        <h2 className={"big-title"}>Become a Partner</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
          auctor cursus. Phasellus est ex, vehicula non ultricies at, pretium ac
          lacus.
        </p>

        <div className={"row"}>
          <button>Download an Application</button>
          <button>Contact Us</button>
        </div>

      </div>

    </section>
  );
}
