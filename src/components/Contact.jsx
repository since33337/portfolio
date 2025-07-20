import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  const phoneNumber = "237696194107"; // ajoute l'indicatif pays ici (+237 pour Cameroun)
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  const email = "armelsince@gmail.com"; 
  const mailtoLink = `mailto:${email}`;

  return (
    <section className="contact-section">
      <h2 className="contact-title">Contact</h2>
      <p className="contact-text">
        <FaWhatsapp style={{ color: "#25D366", marginRight: "8px" }} />
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          Contactez-moi sur WhatsApp
        </a>
      </p>
      <p className="contact-text">
        <FaEnvelope style={{ color: "#D44638", marginRight: "8px" }} />
        <a href={mailtoLink} className="contact-link">
          Envoyez-moi un email
        </a>
      </p>
    </section>
  );
};

export default Contact;
