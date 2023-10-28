import React from 'react'
import { Gradient, Card, Wrapper } from './Wrappers.jsx'
function Halal() {
    return (
    <div>
      <Wrapper>
        <h2>Easy Dinners</h2>

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

export default Halal
