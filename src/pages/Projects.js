import React from 'react';
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import { WebConsumer } from '../context/context';

const Projects = () => {
  return (
    <WebConsumer>
      {value => {
        const { projects } = value;
        return (
          <div style={{marginBottom:'6rem'}}>
            <Title title="Projects" />
            {projects.map(item => (
              <ProjectCard key={item.id} {...item} />
            ))}
          </div>
        )
      }}
    </WebConsumer>
  )
}

export default Projects
