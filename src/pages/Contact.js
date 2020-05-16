import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => {

  return (
    <ContactWrapper>
      <div className="contact-text">
        <h1>Find me on social media or send me a message!</h1>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/christina-yun-58954a123/">
            <FaLinkedinIn className="footer-icon" />
          </a>
          <a href="mailto:yjc.yun@gmail.com">
            <FaRegEnvelope className="footer-icon" />
          </a>
          <a href="https://github.com/yjcyun">
            <FaGithub className="footer-icon" />
          </a>
        </div>
      </div>
      <div className="contact">
        <form
          action="https://formspree.io/christina5707@gmail.com"
          method="POST">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea cols="30" rows="15" placeholder="Message" required />
          <button className="btn" type="submit" style={{ marginTop: '2rem' }}>send</button>
        </form>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
 .contact-text {
    width: 80%;
    max-width: 30rem;
    text-align: center;
    margin: 3rem auto;
    padding-top: 3rem;
  }

  .contact-text h1{
    line-height:1.5;
    margin-bottom: 2rem;
    font-size: 2rem;
  }

  .footer-icon{
    font-size: 2.3rem;
    color: black;
    margin: 1rem 2rem;
    transition: var(--mainTransition);
  }

  .footer-icon:hover {
    transform: translateY(-1rem);
  }

  .contact {
    max-width: 35rem;
    width: 80%;
    text-align: center;
    margin: 1rem auto;
  }

  input, textarea {
    display: block;
    width: 100%;
    padding: 0.8rem;
    margin: 0.7rem 0;
    outline: none;
    font-size: 1rem;
    ::placeholder {
      font-family: 'Poppins', sans-serif;
    }
  } 
`;
export default Contact
