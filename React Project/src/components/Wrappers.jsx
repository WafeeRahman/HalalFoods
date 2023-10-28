import styled from 'styled-components';
//Styled Div For Each Item
export const Wrapper = styled.div
    `
  margin: 3rem 0rem 1rem 1rem;
`;

// Styles for Card
export const Card = styled.div
    `
min-height: 20rem;
max-width: 20rem;
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
a{
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

`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); `;


