import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa';
import Title from '../components/Title';

const Contact = () => {

  return (
    <ContactWrapper>
      <Title title="about" />
      <div className="contact-text">
        <p>I am an ex-Registered Veterinary Technician who decided to become a web developer. I enjoy learning new technologies and am always fascinated by how much I do not know about this world. Should you want to learn more about me, do not hestitate to send me a message.</p>
      </div>
    
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
 .contact-text {
    width: 80%;
    max-width: 40rem;
    text-align: center;
    margin: 2rem auto;
  }

  .contact-text p{
    line-height:1.5;
    margin-bottom: 5rem;
    font-size: 1.4rem;
  }
`;
export default Contact
