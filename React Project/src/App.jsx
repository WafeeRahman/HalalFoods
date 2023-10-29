import React from 'react';
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PiMosque } from 'react-icons/pi';
import { motion } from 'framer-motion';


function App() {

  const pageVariants = {
    initial: {
      y: '100%',
      background: '#00FF00', // Start from the bottom with the green background
    },
    animate: {
      y: 0,
      background: '#00FF00', // Stay green while sliding up
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
      },
    },
    exit: {
      y: '100%',
      background: '#00FF00', // Stay green while sliding down
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
            <PiMosque />
            <Logo to={'/'}>HalalFoods</Logo>
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
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  background:  #D5F3E5; /* Solid green background */
`;

export default App;
