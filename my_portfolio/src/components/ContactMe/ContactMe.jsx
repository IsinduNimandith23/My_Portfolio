import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contactme" className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/linkedin.png"
            text="LinkedIn"
            link="https://www.linkedin.com/in/isindu-nimandith-432228299/"
          />
          <ContactInfoCard
            iconUrl="./assets/images/github.png"
            text="Github"
            link="https://github.com/IsinduNimandith23"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
