import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import Search from "../components/Search"
import Category from "../components/Category"
function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    const getCuisine = async (name) => {
        console.log(name);
        const data = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${import.meta.env.VITE_REACT_APP_ID}&app_key=${import.meta.env.VITE_REACT_APP_API_KEY}&health=alcohol-free&health=pork-free&cuisineType=${name}&excluded=pork&excluded=gelatin&excluded=wine&excluded=alcohol&excluded=bacon&excluded=ham&excluded=lard&excluded=blood&excluded=diglyceride&excluded=glycerol&excluded=hormones&excluded=magnesium%20stearate&excluded=stearic%20acid&excluded=mono%20glyceride&excluded=monoglyceride&excluded=rennin&excluded=pepsin&excluded=shortening&excluded=vanilla%20extract&excluded=vitamins&excluded=whey&random=true`)
        const recipes = await data.json();
        setCuisine(recipes.hits);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type])


    return (
        <>
            <Grid
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>

                {cuisine.map((item) => {
                    let id = item._links.self.href.slice(38, 70);
                    return (
                        <Card key={id}>
                            <img src={item.recipe.images.REGULAR.url} alt="" />
                            <h4>{item.recipe.label}<Link to={'/recipe/' + id}><FaMagnifyingGlass></FaMagnifyingGlass></Link></h4>

                        </Card>
                    )
                })}
            </Grid>
        </>
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
h4 {
    text-align:center;
    padding: 1rem;
}`;



export default Cuisine
