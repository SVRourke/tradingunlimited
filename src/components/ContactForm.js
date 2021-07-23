import React from "react";
import "../styles/ContactForm.scss";

export default function ContactForm() {
  return (
    <form name="contact-form" method="post">
      <input type="hidden" name="contact-form" value="contact" />
      <div className={"row"}>
        <div className={"form-column"}>
          <label for="name">Name:</label>
          <input id="name" name="name" type="text" placeholder="so and so" />
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
  );
}
