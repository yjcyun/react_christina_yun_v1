import React from 'react';
import styled from 'styled-components';
import mainBcg from '../image/mainBcg.png';

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="img-container">
        <img src={mainBcg} alt="avatar" />
      </div>
      <div className="hero-text">
        <h1>Hi there,<br /> my name is Christina.</h1>
        <hr className="title-hr" />
        <h1>A React developer<br /> in Toronto, ON</h1>
      </div>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.section`
height: calc(100vh - 79px);
margin-top: 3rem;

.hero-text{
  text-align:center;
  margin: 3rem auto;
}

hr {
  margin: 1rem auto;
}

.hero-text h1 {
  font-size: 1.8rem;
}

@media (min-width: 768px) {
  max-width: 1170px;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items: center;
  .img-container{
    flex: 1
  }
  .hero-text {
    flex:1;
    padding-left: 5rem;
  }
  .hero-text h1{
    font-size: 2.5rem;
    text-align: left;
  }
  hr{
    margin: 2rem 0;
  }
}
`;
export default Hero
