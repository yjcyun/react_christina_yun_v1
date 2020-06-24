import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaRegEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <div className="wave-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,64L48,58.7C96,53,192,43,288,74.7C384,107,480,181,576,176C672,171,768,85,864,74.7C960,64,1056,128,1152,133.3C1248,139,1344,85,1392,58.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          <div className="footer-text">
            <h2>Say Hi!</h2>
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
        </div>
      </FooterWrapper>
    </>
  )
}

const FooterWrapper = styled.footer`
  .wave-container {
    position:relative;
    overflow:hidden;
    /* background: rgb(255,255,255); */
    /* background: linear-gradient(rgba(255,255,255,1) 0%, rgba(255,225,225,1) 100%); */
    background-color: var(--mainColor);
background-image: linear-gradient(#fff 0%,#cfdfef 100%);

    text-align:center;
  }

  h2 {
    margin-bottom:2rem;
  }

  .footer-icon{
    font-size: 2rem;
    color: black;
    margin: 0 1rem 3rem 1rem;
    transition: var(--mainTransition);
  }

  .footer-icon:hover {
    transform: translateY(-1rem);
  }

  @media (min-width: 768px) {
    .footer-text{
      margin-top: -5rem;
      margin-bottom: 3rem;
    }
  }
`;

export default Footer
