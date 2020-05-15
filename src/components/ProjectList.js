import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../projectData';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <ProjectWrapper>
   
      {data.map(item => {
        return <ProjectCard key={item.id} {...item} />
      })}

    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.section`


`;

export default ProjectList;
