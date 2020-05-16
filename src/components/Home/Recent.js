import React from 'react';
import ProjectCard from '../ProjectCard';
import Title from '../Title';
import styled from 'styled-components';
import { WebConsumer } from '../../context/context';
import { Link } from 'react-router-dom';


const Recent = () => {
  return (
    <RecentWrapper>
      <Title title="Recent Projects" />
      <WebConsumer>
        {value => {
          const { recentProjects } = value;
          return (
            recentProjects.map(item => (
              <ProjectCard key={item.id} {...item} />
            ))
          );
        }}
      </WebConsumer>
      <Link to="/projects">
        <button className="btn">view more</button>
      </Link>
    </RecentWrapper>
  )
}

const RecentWrapper = styled.section`
/* margin: 5rem auto; */
padding: 10rem 0;
`;

export default Recent
