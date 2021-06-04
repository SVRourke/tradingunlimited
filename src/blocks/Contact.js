import React from "react";

import { BsPhone, BsEnvelopeOpen, BsMap } from "react-icons/bs";

import "../styles/Contact.scss";

export default function Contact() {
  return (
    <section id="contact" className={"block_full-screen"}>
      <div className={"row"}>
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
            <div className={"badge"}>
              <BsMap className={"badge-icon"} />
              <p>Hollywood FL, USA</p>
            </div>
            <div className={"badge"}>
              <BsPhone className={"badge-icon"} />
              <p>1+ 954-783-0400</p>
            </div>

            <div className={"badge"}>
              <BsEnvelopeOpen className={"badge-icon"} />
              <p>send us a message!</p>
            </div>
          </div>
        </div>

        <div className={"column"}>
          <form>
            <label for="name">Name:</label>
            <input id="name" name="name" type="text" />

            <label for="email">Email:</label>
            <input id="email" name="email" type="email" />

            <label for="message">Message:</label>
            <textarea id="message" name="message" type="message" />

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </section>
  );
}
