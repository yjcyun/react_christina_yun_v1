import React from 'react'
import Hero from '../components/Home/Hero';
import Recent from '../components/Home/Recent';
import mainBcg from '../image/mainBcg.png';
// https://www.opendoodles.com/

const Home = () => {
  return (
    <>
      <Hero 
      img={mainBcg}
      title="Hi there," 
      title2="I'm Christina."
      title3="A React developer"
      title4="in Toronto, ON" />
      <Recent />
    </>
  )
}


export default Home
