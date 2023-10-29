import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Gradient, Card, Wrapper } from './Wrappers.jsx'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
function Popular() {
  // React State for Setting Popular Recipes Array
  const [popular, setPopular] = useState([]);


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
      const api = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${import.meta.env.VITE_REACT_APP_ID}&app_key=${import.meta.env.VITE_REACT_APP_API_KEY}&health=alcohol-free&health=pork-free&excluded=pork&excluded=gelatin&excluded=wine&excluded=alcohol&excluded=bacon&excluded=ham&excluded=lard&excluded=blood&excluded=diglyceride&excluded=glycerol&excluded=hormones&excluded=magnesium%20stearate&excluded=stearic%20acid&excluded=mono%20glyceride&excluded=monoglyceride&excluded=rennin&excluded=pepsin&excluded=shortening&excluded=vanilla%20extract&excluded=vitamins&excluded=whey&random=true`)



      const data = await api.json(); //Take Api Response and Parse to JSON

      console.log(data);
      localStorage.setItem("popular", JSON.stringify(data.hits)); //Setpopular in local storage
      setPopular(data.hits); //Set popular array state to copy recipe array

    }


  };


  return (
    //For Each Recipe in Popular Recipe, Place a Card with Details within a Wrapper Div
    // Wrap Each Card in a Slide
    <div>

      <Wrapper>
        <h3>For You</h3>

        <Splide options={{
          perPage: 5,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
          {
            popular.map((hit) => {
              let id = hit._links.self.href.slice(38,70);
              return (
               
                <SplideSlide key={id}>
               
              
                  <Card>
                   
                      <h5>{hit.recipe.label}<Link to={'/recipe/' +id}><FaMagnifyingGlass></FaMagnifyingGlass></Link></h5>
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


export default Popular
