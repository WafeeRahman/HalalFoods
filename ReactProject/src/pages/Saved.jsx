import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { IoFlagOutline } from 'react-icons/io5';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Search from '../components/Search';
import Category from '../components/Category';
function Saved() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch saved recipes
    axios.get('http://localhost:3000/saved')
      .then((response) => {
        const data = response.data;
        if (data.success) {
          // Set the fetched recipes in the state
          const parsedRecipes = data.savedRecipes.map(recipe => JSON.parse(recipe));
          setSavedRecipes(parsedRecipes);
        } else {
          // Handle the case when fetching fails
          console.error('Failed to fetch saved recipes');
        }
      })
      .catch((error) => {
        console.error('Error fetching saved recipes:', error);
      });
  }, []); // The empty dependency array ensures this runs only once when the component mounts.

  return (
    <div>
      <Search />
      <Category />
      <h2>Saved Recipes</h2>

      <Grid>
        {savedRecipes.map((recipe, index) => {
          // Parse the recipe object from the JSON string
          const parsedRecipe = JSON.parse(recipe);

          // Check if the properties are defined before splitting
          const imageSrc = parsedRecipe.image
          const recipeUrl = parsedRecipe.url ? parsedRecipe.url.split('?')[0] : '';

          return (
            <>
              <Card key={index}>
                <img src={imageSrc} alt={parsedRecipe.recipeName} />
                <h4>{parsedRecipe.recipeName} </h4>
                <a href={recipeUrl} target="_blank" rel="noopener noreferrer">
                  <FaMagnifyingGlass></FaMagnifyingGlass>
                </a>
              </Card>
            </>
          );
        })}

      </Grid>
    </div>
  );

}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: white;
    font-size: 1.5rem;
    text-decoration: none;
  }
  a:hover {
    color: lightsteelblue;
    transition: 0.5s;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

const SaveIcon = styled(IoFlagOutline)`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: scale(0.6);
  z-index: 8;
  &:hover {
    transform: scale(0.8);
  }
`;

export default Saved;
