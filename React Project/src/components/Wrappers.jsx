import styled from 'styled-components';
//Styled Div For Each Item
export const Wrapper = styled.div
    `
  margin: 4rem 0rem;
`;

// Styles for Card
export const Card = styled.div
    `
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img {
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

}
h5{
  position:absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  font-weight: 600;
  font-size: 2rem;
  height: 40%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); `;


