import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'

function Popular() {
  // React State for Setting Popular Recipes Array
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    //React's Fetch API Requester
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&number=9`)
    const data = await api.json(); //Take Api Response and Parse to JSON
    setPopular(data.recipes); //Set popular array state to copy recipe array
  };


  return (
    //For Each Recipe in Popular Recipe, Place a Card with Details within a Wrapper Div
    // Wrap Each Card in a Slide
   
      <Wrapper>
        <h2>Our Picks</h2>

        <Splide options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {
            popular.map((recipe) => {
              return (
                <SplideSlide>
                  <Card>
                    <h5>{recipe.title}</h5>
                    <img src={recipe.image} alt={recipe.title} />
                  </Card>
                </SplideSlide>
              );
            })
          }
        </Splide>
      </Wrapper>




  )
}

//Styled Div For Each Item
const Wrapper = styled.div
  `
  margin: 4rem 0rem;
`;

// Styles for Card
const Card = styled.div
  `
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 1005;
  object-fit: cover;
}
h5{
  position:absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  font-weight: 800px;
  font-size: 2rem;
}
`;

export default Popular
