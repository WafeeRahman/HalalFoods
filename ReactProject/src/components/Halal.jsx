import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Gradient, Wrapper } from './Wrappers.jsx'
import styled from 'styled-components';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { IoFlagOutline } from 'react-icons/io5'
import axios from 'axios';
function Halal() {

    // React State for Setting Popular Recipes Array
    const [halal, setHalal] = useState([]);


    useEffect(() => {
        getHalal();
    }, []);

    const getHalal = async () => {
        const check = localStorage.getItem("halal"); //Check to see if popular is already loaded into localStorage

        if (check) {
            setHalal(JSON.parse(check));
        }

        //If local storage is empty do another fetch request
        else {
            const api = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${import.meta.env.VITE_REACT_APP_ID}&app_key=${import.meta.env.VITE_REACT_APP_API_KEY}&health=alcohol-free&health=pork-free&dishType=Main%20course&excluded=pork&excluded=gelatin&excluded=wine&excluded=alcohol&excluded=bacon&excluded=ham&excluded=lard&excluded=blood&excluded=diglyceride&excluded=glycerol&excluded=hormones&excluded=magnesium%20stearate&excluded=stearic%20acid&excluded=mono%20glyceride&excluded=monoglyceride&excluded=rennin&excluded=pepsin&excluded=shortening&excluded=vanilla%20extract&excluded=vitamins&excluded=whey&random=true`)


            const data = await api.json(); //Take Api Response and Parse to JSON


            localStorage.setItem("halal", JSON.stringify(data.hits)); //Setpopular in local storage
            setHalal(data.hits); //Set popular array state to copy recipe array

        }


    };

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
                alert('Error saving recipe:', error);
            });
    }

    return (
        <div>

            <Wrapper>
                <h3>Dinner Ideas</h3>

                <Splide options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: 'free',
                    gap: '3rem',
                }}>
                    {
                        halal.map((hit) => {
                            let id = hit._links.self.href.slice(38, 70);
                            return (
                                <SplideSlide key={id}>
                                    <Card>

                                        <h5>{hit.recipe.label}<SaveIcon onClick={() => saveRecipe(hit)}></SaveIcon><Link to={'/recipe/' + id}><FaMagnifyingGlass></FaMagnifyingGlass></Link></h5>
                                        <img src={hit.recipe.images.REGULAR.url} alt={hit.recipe.label} />
                                        <Gradient></Gradient>
                                    </Card>
                                </SplideSlide>
                            );
                        })
                    }
                </Splide>
            </Wrapper>

        </div>

    )
}


// Styles for Card
export const Card = styled.div
    `
min-height: 18rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  

}


h5{
  position:absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%,0%);
  color: white;
  width: 100%;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
    position:absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-10%,-10%);
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  a:hover {
    color: lightsteelblue;
    transition: 0.5s;
  }
  &:hover{
    transform: scale(1.02);
    transition: 0.5s
  }
`;


const SaveIcon = styled(IoFlagOutline)`
  position: absolute;
  bottom: 0rem;
  left: 0.8rem;
  border-radius: 50%;
  padding: 1rem;
  font-size: 3rem; /* Larger size */
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
  transform: scale(1); /* Initial size */
  

  &:hover {
    transform: scale(1.2); /* Enlarge on hover */
    color: #FFD700; /* Lighter shade of gold on hover */
  }
`;


export default Halal
