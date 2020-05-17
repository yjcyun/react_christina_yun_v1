import React from 'react';
import ErrorImg from '../image/error.png';
import Hero from '../components/Home/Hero';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Hero
      img={ErrorImg}
      title="404"
      title3="Oops!"
      title4="This page does not exist">
      <Link to="/">
        <button className="btn left-btn" style={{ marginTop: '3rem' }}>return home</button>
      </Link>
    </Hero>
  )
}

export default Error
