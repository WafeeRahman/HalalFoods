import React from "react"
import Home from "./Home"
import Cuisine from "./Cuisine"
import Searched from "./Searched"
import Recipe from "./Recipe"
import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Signup from './Signup';
import Search from "../components/Search"
import Category from "../components/Category"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Login from "./Login"
import Logout from "./Logout"
function Pages() {
  const location = useLocation();


  
  return (
    <AnimatePresence mode="wait">
   
      <Routes Location={location} key={location.pathname}>
        <Route path="/" element={< Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="recipe/:name" element={<Recipe />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </AnimatePresence>

  )
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

export default Pages
