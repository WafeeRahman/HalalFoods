import { FaHamburger } from 'react-icons/fa';
import { FaBowlRice } from 'react-icons/fa6';
import { GiTacos, GiDonerKebab } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Refresh from './Refresh';

function Category() {
  return (
    <>
      <List>
        <SLink to={'/cuisine/Asian'}>
          <FaBowlRice />
          <h4>Asian</h4>
        </SLink>
        <SLink to={'/cuisine/American'}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/Middle Eastern'}>
          <GiDonerKebab />
          <h4>Middle Eastern</h4>
        </SLink>
        <SLink to={'/cuisine/South American'}>
          <GiTacos />
          <h4>South American</h4>
        </SLink>
      </List>
      <Refresh />
    </>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #313131, #313131); /* Set initial gradient */
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.9);
  h4 {
    color: white;
    font-size: 0.6rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  transition: background 0.5s ease; 
  &:hover {
    background: linear-gradient(to right, #4D8C57, #F8DE7E);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
    transform: scale(1.01);
  transition: 0.2s;
  }
  
`;

export default Category;
