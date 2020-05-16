import React from 'react';
import styled from 'styled-components';

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <span className="title-text">
        {title}
      </span>
      <hr className="title-hr" />
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
 text-align:center;
 margin-top: 5rem;
 text-transform:uppercase;
 font-size:1.7rem;
 font-weight: bold;

 .title-text{
   letter-spacing: 0.1rem;
 }

 .title-hr{
   margin: 1rem auto;
 }
 `;

export default Title
