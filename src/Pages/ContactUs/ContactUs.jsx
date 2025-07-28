import React from "react";
import ContactForm from "../../Components/contact-us/contactForm/ContactForm";
import { ContactSection } from "../../Components/contact-us/contact/ContactSection";
import PageTitle from "../../Components/PageTitle";
import Contactimg from "../../assets/images/Contact.png";

function ContactUs() {
  return (
    <div className="">
      <PageTitle
        tag="Contact Us"
        title="Have Any Questions?"
        subtitle="Let’s talk about your residential or commercial needs! Simply fill out the contact form below, and a member of our team will get in touch with you shortly"
        imageSrc={Contactimg}
        imageAlt="Healthcare and Commercial Electrical Services"
      />
      <ContactForm />
      <ContactSection />
    </div>
  );
}

export default ContactUs;
