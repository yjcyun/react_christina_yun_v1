import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../projectData';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <ProjectWrapper>
    <h1>Recent Work</h1>
    <hr className="title-hr"/>
      {data.map(item => {
        return <ProjectCard key={item.id} {...item} />
      })}
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.section`

`;

export default ProjectList;
