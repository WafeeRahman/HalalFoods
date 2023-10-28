import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Gradient, Card, Wrapper } from './Wrappers.jsx'

function Popular() {
  // React State for Setting Popular Recipes Array
  const [popular, setPopular] = useState([]);

  const exclude = "pork,gelatin,wine,alcohol,pork,bacon,ham,lard,blood,diglyceride,glycerol,hormones,magnesium stearate,stearic acid,mono glyceride,monoglyceride,rennin,pepsin,shortening,vanilla extract,vitamins,whey"


  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular"); //Check to see if popular is already loaded into localStorage

    if (check) {
      setPopular(JSON.parse(check));
    }

    //If local storage is empty do another fetch request
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${import.meta.env.VITE_REACT_APP_API_KEY}&excludeIngredients=${exclude}&type=dessert&number=9`);


      const data = await api.json(); //Take Api Response and Parse to JSON


      localStorage.setItem("popular", JSON.stringify(data.recipes)); //Setpopular in local storage
      setPopular(data.recipes); //Set popular array state to copy recipe array

    }


  };


  return (
    //For Each Recipe in Popular Recipe, Place a Card with Details within a Wrapper Div
    // Wrap Each Card in a Slide
    <div>
      <Wrapper>
        <h2>Desserts For You</h2>

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
                <SplideSlide key={recipe.id}>
                  <Card>

                    <h5>{recipe.title}</h5>
                    <img src={recipe.image} alt={recipe.title} />
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


export default Popular
