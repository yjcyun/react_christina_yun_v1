import React from 'react';
import styled from 'styled-components';

const Hero = ({ title, title2, title3, title4, img, children }) => {
  return (
    <HeroWrapper>
      <div className="img-container">
        <img src={img} alt="avatar" />
      </div>
      <div className="hero-text">
        <div className="hero-text-1 fadeInAnimated">
          <h1>{title}<br />{title2}</h1>
        </div>
        <div className="hero-text-2 fadeInAnimated">
          <hr className="title-hr" />
          <h1>{title3}<br />{title4}</h1>
        </div>
        {children}
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

.fadeInAnimated {
  opacity: 0;
  animation: fadein 0.4s forwards;
}

.hero-text-1{
  animation-delay:0.4s;
}

.hero-text-2{
  animation-delay:1.3s;
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

hr {
  margin: 1rem auto;
}

.hero-text h1 {
  font-size: 1.8rem;
}

.img-container{
  margin-left: 2rem;
}

@media (min-width: 768px) {
  max-width: 1170px;
  margin: 0 auto;
  display:flex;
  justify-content:center;
  align-items: center;

  .img-container{
    flex: 1;
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
