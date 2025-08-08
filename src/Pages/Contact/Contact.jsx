import React from 'react'
import Header from '../../Components/Header/Header'
import { Container } from "react-bootstrap";
import { contactInfo } from '../../Data/ContactInfo'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <Header title="Contact Us" />
      <Container>
        <div className="content py-5">
          <div className="row g-4 justify-content-center ">
            {contactInfo.map(({ name, icon }) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={name}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=momopasha09090@gmail.com"
                  className="bg-blue d-flex justify-content-center align-items-center flex-column rounded"
                >
                  {icon}
                  <h5 className="text-white mb-5">{name}</h5>
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
