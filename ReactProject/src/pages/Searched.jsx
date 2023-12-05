import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { FaMagnifyingGlass } from 'react-icons/fa6';

import axios from 'axios';
import { IoFlagOutline } from 'react-icons/io5'
function Searched() {

    let params = useParams();
    const [searched, setSearched] = useState([]);

    const getSearched = async (name) => {
        console.log(name);
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${import.meta.env.VITE_REACT_APP_ID}&app_key=${import.meta.env.VITE_REACT_APP_API_KEY}&health=alcohol-free&health=pork-free&q=${name}&excluded=pork&excluded=gelatin&excluded=wine&excluded=alcohol&excluded=bacon&excluded=ham&excluded=lard&excluded=blood&excluded=diglyceride&excluded=glycerol&excluded=hormones&excluded=magnesium%20stearate&excluded=stearic%20acid&excluded=mono%20glyceride&excluded=monoglyceride&excluded=rennin&excluded=pepsin&excluded=shortening&excluded=vanilla%20extract&excluded=vitamins&excluded=whey&random=true`)
        const recipes = await data.json();
        setSearched(recipes.hits);
        console.log(recipes.hits);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    const saveRecipe = (hit) => {
        // Prepare the data as an object
        const recipeData = {
            recipeName: hit.recipe.label,
            image: hit.recipe.images.REGULAR.url,
            url: hit.recipe.url
        };

        // Make a POST request to your server to save the recipe using Axios
        axios.post('http://localhost:3000/saved', { recipe: JSON.stringify(recipeData) })
            .then((response) => {
                const data = response.data;
                console.log(data);
                if (data.success) {
                    alert('Recipe saved successfully');
                } else {
                    alert('User Must Log In');
                }
            })
            .catch((error) => {
                console.error('Error saving recipe:', error);
            });
    }

    return (

        <Grid>
            {searched.map((item) => {
                let id = item._links.self.href.slice(38, 70);
                return (
                    <Card key={id}>
                        <img src={item.recipe.images.REGULAR.url} alt="" />
                        <h4>{item.recipe.label}<SaveIcon onClick={() => saveRecipe(item)}></SaveIcon><Link to={'/recipe/' + id}><FaMagnifyingGlass></FaMagnifyingGlass></Link></h4>
                    </Card>
                );
            })}
        </Grid>
    )
}

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;
`;

const Card = styled.div`
img {
    width: 100%;
    border-radius: 2rem;
}
a {
    
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(50%)
  }
  
  a:hover {
    color: lightsteelblue;
    transition: 0.5s;
  }
Link {
    z-index:1;
}
h4 {
    text-align:center;
    padding: 1rem;
}
&:hover{
    transform: scale(1.02);
    transition: 0.5s
  }
`;

const SaveIcon = styled(IoFlagOutline)`
  position: absolute;
  bottom: 1rem; /* Adjusted bottom position */
  left: 1rem; /* Adjusted left position */
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: scale(0.6);
  z-index: 8; /* Ensure it's above the image */
  &:hover {
    transform: scale(0.8);
  }
`;

export default Searched
