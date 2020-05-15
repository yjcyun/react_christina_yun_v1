import React from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { WebConsumer } from '../context/context';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <WebConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <NavbarWrapper className="navbar">
            <div className="nav-center">
              <div className="nav-header">
                <Link to='/' className="logo">
                  <p>Christina Yun</p>
                </Link>
                {sidebarOpen
                  ? <button className="nav-btn" onClick={handleSidebar}>
                    <MdClose className="nav-icon close" />
                  </button>
                  : <button className="nav-btn" onClick={handleSidebar}>
                    <MdMenu className="nav-icon open" />
                  </button>
                }

              </div>

              <ul className={sidebarOpen ? 'nav-links show-nav' : 'nav-links'}>
                {links.map(item =>
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={handleSidebar}>
                      {item.text}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </NavbarWrapper>
        );
      }}
    </WebConsumer>
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
  /* ********TODO: ADD TRANSITION BETWEEN TOGGLE******* */

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
    transition: var(--mainTransition);
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
