import React from 'react';
import styled from 'styled-components';


const About = () => {


  return (
    <AboutWrapper>
      <h1>Hi! Welcome to my portfolio website. My name is Christina and I'm a front-end developer who enjoys building websites using React.</h1>
      <div className="contact">
        <h3>Resume : Coming Soon...</h3>
        <h3 className="email">Email : christina5707@gmail.com</h3>
      </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`
  padding: 2.5rem;
  h1{
    line-height:1.5;
    margin-bottom: 2rem;
  }
  h3{
    margin: 0.3rem 0;
  }

  @media (min-width: 768px) {
    width: 40rem;
    margin: 5rem auto;
    h1{
      font-size: 2rem;
    }
    h3{
      font-size: 1.3rem;
      margin: 1rem 0;
      font-weight: normal;
    }
  }
 
`;
export default About
