import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { PiMosque } from 'react-icons/pi';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';

function App() {
  const [name, setName] = useState('');
  axios.defaults.withCredentials = true;

  useEffect(() => {
    // Fetch user data on component mount
    axios.get('http://localhost:3000')
      .then(res => {
        if (res.data.valid) {
          setName(res.data.username);
        }
      })
      .catch(err => console.log(err));
  }, [name]);



  const handleLogout = () => {
    // You can add logout logic here if needed
    // Then, reload the page
    window.location.reload();
  };

  const pageVariants = {
    initial: {
      y: '100%',
      background: '#00FF00',
    },
    animate: {
      y: 0,
      background: '#00FF00',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    exit: {
      y: '100%',
      background: '#00FF00',
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >

      <BrowserRouter>
        <ContentContainer>
          <Nav>
            <Logo to={'/'}><PiMosque style={{ transform: 'translateY(5px)' }} />HalalFoods
            </Logo>

            <NavLinks>
              {name ? (
                <>
                  <Link to={'/saved'}>Saved Recipes</Link>
                  <Link to={'/logout'} onClick={handleLogout}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to={'/signup'}>Sign Up</Link>
                  <Link to={'/login'} >Login</Link>
                </>
              )}
            </NavLinks>
          </Nav>
          <Pages />
        </ContentContainer>
      </BrowserRouter>
    </motion.div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: serif;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 0rem;
  svg {
    font-size: 2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: relative;
  background: #D5F3E5;
`;

export default App;
