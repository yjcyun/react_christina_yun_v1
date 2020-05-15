import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({ title, skills, img, subtitle, live, github }) => {
  return (
    <ProjectCardWrapper>
      <div className="card-skills">
        {skills.map(item => {
          return (
            <div key={item} className="card-skill">
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
              <div 
              key={item} 
              className="card-skill large">
                <span>{item}</span>
              </div>
            )
          })}
          <h1 className="card-title">{title}</h1>
          <p className="card-subtitle">{subtitle}</p>
          <a href={live} className="link-icon"><button className="btn">Live Demo</button></a>
          <a href={github} className="link-icon">
            <button className="btn">Github</button>
          </a>
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
background: var(--lightestColor);
border-radius: 10px;
text-align: center;
position: relative;

.card-skill.large {
  display: none
}

.img-container {
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


.btn {
  padding: 0.5rem 1rem;
  display: inline;
  margin: 1.5rem 0.5rem 0 0.5rem;
  border-radius: 0;
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
      margin-bottom: 3rem;
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
