import React from 'react'
import Hero from '../components/Hero'
import ProjectList from '../components/ProjectList'
import styled from 'styled-components'

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <div className="recent">
        <h1>Recent Projects</h1>
        <hr className="title-hr" />
        <ProjectList />
      </div>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
 text-align:center;
 .title-hr{
   margin: 1rem auto;
   margin-bottom:3rem;
 }
 .recent{
   margin: 5rem auto;
 }
 `;
export default Home
