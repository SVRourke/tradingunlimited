import React from "react";

import { BsPhone, BsEnvelopeOpen, BsMap, BsFileText } from "react-icons/bs";
import BadgeText from "../components/BadgeText";
import "../styles/Contact.scss";

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
          <form>
            <div className={"row"}>
              <div className={"form-column"}>
                <label for="name">Name:</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="so and so"
                />
              </div>

              <div className={"form-column"}>
                <label for="email">Email:</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="person@example.com"
                />
              </div>
            </div>

            <label for="message">Message:</label>
            <textarea
              id="message"
              name="message"
              type="message"
              placeholder="enter a message..."
            />

            <input type="submit" value="Submit!" />
          </form>
        </div>
      </div>
    </section>
  );
}
