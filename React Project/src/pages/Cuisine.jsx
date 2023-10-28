import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink, useParams } from 'react-router-dom'
import { v4 as uuid } from 'uuid';
function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        console.log(name);
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=46c0246f&app_key=%20838808eb9dd36173e9c9ff6d69079ee9%09&health=alcohol-free&health=pork-free&cuisineType=${name}&excluded=pork&excluded=gelatin&excluded=wine&excluded=alcohol&excluded=bacon&excluded=ham&excluded=lard&excluded=blood&excluded=diglyceride&excluded=glycerol&excluded=hormones&excluded=magnesium%20stearate&excluded=stearic%20acid&excluded=mono%20glyceride&excluded=monoglyceride&excluded=rennin&excluded=pepsin&excluded=shortening&excluded=vanilla%20extract&excluded=vitamins&excluded=whey&random=true`)
        const recipes = await data.json();
        setCuisine(recipes.hits);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])


    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <Card key={uuid()}>
                        <img src={item.recipe.images.REGULAR.url} alt="" />
                        <h4>{item.recipe.label}</h4>
                    </Card>
                )
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
a{
    text-decoration: none;
}
h4 {
    text-align:center;
    padding: 1rem;
}`;



export default Cuisine
