import React from "react";
import SeparatorTop from "../assets/separatortop.svg";
import "../styles/PartnershipCta.scss";

export default function PartnershipCta() {
  return (
    <section id="partnerCta" className={"block"}>
      <div className={"svgContainer"}>
        <svg
          id="separatorTop"
          width="301.13034mm"
          height="72.314789mm"
          viewBox="0 0 301.13034 72.314789"
        >
          <path
            fill='white'
            id="rect31"
            d="M 43.375903,83.509455 186.1829,82.868406 185.86238,105.75535 c -30.93061,-16.026221 -113.63928,20.19304 -142.646739,0 z"
          />
        </svg>
      </div>

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
    </section>
  );
}
