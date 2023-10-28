import { FaHamburger } from 'react-icons/fa';
import { FaBowlRice } from 'react-icons/fa6';
import { GiTacos, GiDonerKebab } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import React from 'react'

function Category() {
    return (
        <List>
            <SLink to={'/cuisine/Asian'}>
                <FaBowlRice></FaBowlRice>
                <h4>Asian</h4>
            </SLink>
            <SLink to={'/cuisine/American'}>
                <FaHamburger></FaHamburger>
                <h4>American</h4>
            </SLink>
            <SLink to={'/cuisine/Middle Eastern'} >
                <GiDonerKebab></GiDonerKebab>
                <h4>Middle Eastern</h4>
            </SLink>
            <SLink to={'/cuisine/South American'} >
                <GiTacos></GiTacos>
                <h4>South American</h4>
            </SLink>
        </List>
    )
}
const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 6rem;
height: 6rem;
cursor: pointer;
trasnform: scale(0.5);
h4 {
    color:white;
    font-size: 0.6rem;
}
svg {
    color: white;
    font-size: 1.5rem;
}
&.active{
    background: linear-gradient(to right, #4D8C57, #F8DE7E);
    svg {
        color: white;
    }
    h4 {
        color: white;
    };
    transition: 0.5s;
};`


export default Category
