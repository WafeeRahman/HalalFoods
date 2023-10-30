import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { Gradient, Card, Wrapper } from './Wrappers.jsx'
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoFlagOutline } from 'react-icons/io5';
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
    <>
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
                let id = hit._links.self.href.slice(38, 70);
                return (

                  <SplideSlide key={id}>


                    <Card>

                      <h5>{hit.recipe.label}<SaveIcon></SaveIcon><Link to={'/recipe/' + id}><FaMagnifyingGlass></FaMagnifyingGlass></Link></h5>
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

      <div>
        <Wrapper>
          <h3>Halal Food Providers</h3>
          <Splide options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '20rem',
          }}>

            <SplideSlide>


              <Card>

                <h5><Logo src="https://zabihahalal.com/wp-content/themes/zabiha-halal/images/images-logos-zh-logo.svg"/><Link to="https://zabihahalal.com/"><FaMagnifyingGlass></FaMagnifyingGlass></Link></h5>
                <img src="https://zabihahalal.com/wp-content/uploads/2021/03/zabiha-halal-cajun-deli-slices.jpg" />
                <Gradient></Gradient>

              </Card>

            </SplideSlide>

            <SplideSlide>


              <Card>

                <h5><Logo src="https://alsafahalal.com/wp-content/uploads/2018/07/head-logo-2.png"/><Link to="https://alsafahalal.com/"><FaMagnifyingGlass></FaMagnifyingGlass></Link></h5>
                <img src="https://www.shop-alsafahalal.com/cdn/shop/files/Alsafa_AngusBurger1_300x.jpg?v=1613740780" alt="" />
                <Gradient></Gradient>

              </Card>

            </SplideSlide>

            <SplideSlide>


              <Card>

                <h5><Logo src="https://sargentfarms.ca/cdn/shop/files/sf-talllogo-colour-01_5be947c6-9e1a-4da6-85c8-756027de5786.png?v=1666969140&width=400" alt="" /><Link to="https://sargentfarms.ca/pages/halal-by-hand"><FaMagnifyingGlass></FaMagnifyingGlass></Link></h5>
                <img src="https://i.shgcdn.com/73df5d78-80bf-4a0c-8156-df1a1efda4bf/-/format/auto/-/preview/3000x3000/-/quality/lighter/" />
                <Gradient></Gradient>

              </Card>

            </SplideSlide>

          </Splide>
        </Wrapper>
      </div>


    </>


  )
}

const Logo = styled.img
`
min-width: 100%;
min-height: 100%;
object-fit: auto;
transform: scale(0.6)
`
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


export default Popular
