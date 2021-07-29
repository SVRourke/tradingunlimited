import React from "react";

import BadgeText from "../components/BadgeText";
import ContactForm from "../components/ContactForm";
import "../styles/layout/_contact.scss";

import { ReactComponent as Separator } from "../assets/separator.svg";

export default function Contact() {
  return (
    <section id="contact" className={"block_full-screen"}>
      <Separator />

      <div className={"contact-content row snap-center"}>
        <div className={"column"}>
          <h2 className={"big-title"}>Contact Us</h2>
          <p>
            At Trading Unlimited we believe our most valuable assets are the
            relationships we develop with our partners and customers and we're
            always adding more. If you'd like to become a partner or customer
            we'd like to hear about it!
          </p>

          <div className={"badge-column"}>
            <BadgeText icon={"BsMap"} text={"Hollywood FL, USA"} />

            <a href="tel:9547830100">
              <BadgeText icon={"BsPhone"} text={"1+ 954-783-0400"} />
            </a>

            <BadgeText icon={"BsFileText"} text={"Fax: 1+ 954-783-0400"} />
            <a href="mailto:contact@tradingunlimited.com">
              <BadgeText icon={"BsEnvelopeOpen"} text={"send us a message!"} />
            </a>
          </div>
        </div>

        <div className={"column"}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
