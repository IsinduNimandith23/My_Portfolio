import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="https://img.icons8.com/ios/452/phone.png"
            text="isindunimandith23@gmail.com"
          />
          <ContactInfoCard
            iconUrl="https://img.icons8.com/ios/452/phone.png"
            text="https://github.com/IsinduNimandith23"
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
