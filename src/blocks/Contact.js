import React from "react";

import { BsPhone, BsEnvelopeOpen, BsMap } from "react-icons/bs";
import BadgeText from "../components/BadgeText";
import "../styles/Contact.scss";

import { ReactComponent as Separator } from "../assets/separator.svg";

export default function Contact() {
  return (
    <section id="contact" className={"block_full-screen"}>
      <Separator />

      <div className={"contact-content row"}>
        <div className={"column"}>
          <h2 className={"big-title"}>Contact Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat
            auctor cursus. Phasellus est ex, vehicula non ultricies at, pretium
            ac lacus. Sed luctus nibh eu dui rhoncus pretium. In dui sapien,
            faucibus nec porttitor non, pretium ut est. Sed nisi felis, luctus
            quis molestie at, blandit ut velit. Aenean sit amet efficitur diam.
          </p>

          <div className={"badge-column"}>
            <BadgeText icon={'BsMap'} text={"Hollywood FL, USA"}/>
            <BadgeText icon={'BsPhone'} text={"1+ 954-783-0400"}/>
            <BadgeText icon={'BsEnvelopeOpen'} text={"send us a message!"}/>
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
