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
          <img src={img} alt="" />
        </div>
        <div>

          <h1 className="card-title">{title}</h1>
          <p className="card-subtitle">{subtitle}</p>
        </div>

      </div>
    </ProjectCardWrapper>
  )
}

const ProjectCardWrapper = styled.div`
margin: 1rem auto;
width: 90%;
padding: 2rem;
border: 1px solid black;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
text-align: center;

.img-container {
  width: 15rem;
  margin: 2rem auto;
}

.card-skill {
  display:inline-block;

}
.card-skill span{
  border: 1px solid grey;
  border-radius: 10px;
  margin: 0 0.3rem;
  padding: 0.1rem 0.3rem;
  line-height: 2;
}

.card-title{
  text-transform: uppercase;
  margin-bottom: 1rem;
}

`;

export default ProjectCard
