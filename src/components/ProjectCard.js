import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, skills, img, subtitle }) => {
  console.log(skills);
  return (
    <ProjectCardWrapper>
      <div className="card-skills">

        {skills.map(item => {
          return (
            <div className="card-skill">
              <span>{item}</span>
            </div>
          )
        })}

        <div className="img-container">
          <img src={img} alt="project screenshot" />
        </div>
     
        <div className="card-text-container">
          {skills.map(item => {
            return (
              <div className="card-skill large">
                <span>{item}</span>
              </div>
            )
          })}
          <h1 className="card-title">{title}</h1>
          <p className="card-subtitle">{subtitle}</p>
        </div>

      </div>
    </ProjectCardWrapper>
  )
}

const ProjectCardWrapper = styled.div`
margin: 2rem auto;
width: 90%;
padding: 2rem;
border: 1px solid #ffe1e1;
background:#fffbfb;
border-radius: 10px;
text-align: center;
cursor: pointer;

.card-skill.large {
  display: none
}

.img-container {
  width: 22rem;
  margin: 2rem auto;
}

.card-skill {
  display:inline-block;
}
.card-skill span{
  border: 1px solid grey;
  border-radius: 1rem;
  margin: 0 0.3rem;
  padding: 0.1rem 0.4rem;
  line-height: 2;
}

.card-title{
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size:2rem;
}

  @media (min-width: 768px) {
    padding: 0;
    width: 80%;
    .img-container{
      flex: 2;
    }
    .img-container img{
      width: 70%;
    }
    .card-text-container{
      flex:3;
    }
    .card-skills {
      display: flex;
      flex-direction: row;
      justify-content:center;
      align-items: center;
      position: relative;
    }
    .card-skill {
      display: none;
    }
    .card-skill.large {
      display: inline-block;
      margin-bottom: 5rem;
    }
    .card-subtitle {
      width: 25rem;
      margin: 0 auto;
    }
   
    .card-title{
      font-size: 2.8rem;
    }
  }

`;

export default ProjectCard
