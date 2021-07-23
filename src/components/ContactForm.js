import React, { useState } from "react";
import "../styles/ContactForm.scss";

export default function ContactForm() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formInfo, setInfo] = useState(initialState);

  const handleChange = (e) => {
    const newValues = { ...formInfo };
    newValues[e.target.name] = e.target.value;
    setInfo(newValues);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.dir(formInfo);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formInfo }),
    })
      .then(() => {
        alert("Success!");
        setInfo(initialState);
      })
      .catch((error) => alert(error));
  };

  return (
    <form id="contact-form-form" name="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="contact-form" value="contact" />
      <div className={"row"}>
        <div className={"form-column"}>
          <label for="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="so and so"
            value={formInfo["name"]}
            onChange={handleChange}
          />
        </div>

        <div className={"form-column"}>
          <label for="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formInfo.email}
            placeholder="person@example.com"
            onChange={handleChange}
          />
        </div>
      </div>
      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        type="message"
        value={formInfo.message}
        placeholder="enter a message..."
        onChange={handleChange}
      />
      <input type="submit" value="Submit!" />
    </form>
  );
}
