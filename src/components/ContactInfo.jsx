import React from "react";

export default function ContactInfo() {
  return (
    <div id="title">
      <h1>Vinicius S. F. Kuhlmann</h1>
      <div id="contact-section">
        <span class="contact-info">
          <i id="phone-icon" class="fas fa-phone fa-xl" style={{ marginRight: "5px" }}></i>
          <a id="phone" href="tel:5511973152766">+55 11 97315-2766</a>
        </span>
        <span class="contact-info">
          <i id="email-icon" class="fas fa-envelope fa-xl" style={{ marginRight: "5px" }}></i>
          <a id="email" href="mailto:vinikuhlmann@gmail.com">vinikuhlmann@gmail.com</a>
        </span>
        <span class="contact-info">
          <i id="linkedin-icon" class="fab fa-linkedin fa-xl" style={{ marginRight: "5px" }}></i>
          <a id="linkedin" href="https://www.linkedin.com/in/vinikuhlmann/" target="_blank"
            rel="noopener noreferrer">vinikuhlmann</a>
        </span>
      </div>
    </div>
  );
}