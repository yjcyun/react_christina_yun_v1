import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';
import { WebConsumer } from '../context/context';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarWrapper className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to='/' className="logo">
            <p>Christina Yun</p>
          </Link>
          <button className="nav-btn" onClick={handleToggle}>
            <MdMenu className="nav-icon" />
          </button>
        </div>

        <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/projects'>projects</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
        </ul>


      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.nav`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  z-index:1;
  background: white;

  .nav-header {
    display:flex;
    justify-content:space-between;
  }

  .nav-btn{
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .nav-icon {
    font-size: 1.5rem;
  }

  .logo {
    font-size: 2rem;
    font-family: 'Sacramento', cursive;
    font-weight: bold;
    color: black;
    text-decoration:none;
  }

  .nav-links {
    height: 0;
    overflow: hidden;
    transition: all 0.3s linear;
    list-style: none;
    transform: translateY(20%);
  }

  .nav-links a {
    display:block;
    text-decoration: none;
    padding: 1rem 0;
    color: black;
    transition: all 0.3s linear;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 2rem;
  }

  .show-nav {
    height: 100vh;
  }

  @media (min-width: 768px) {
    .nav-btn {
      display: none;
    }

    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      height: auto;
      display: flex;
      margin-left: 4rem;
      transform: translateY(0);
    }

    .nav-links a {
      padding: 0 1rem;
      font-size: 1.2rem;
    }
  }
`;

export default Navbar
