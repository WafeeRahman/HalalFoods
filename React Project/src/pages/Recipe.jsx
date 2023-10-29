import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";



import React from 'react'


function Recipe() {
    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('ingredients');
    const fetchDetails = async () => {
        const data = await fetch(`https://api.edamam.com/api/recipes/v2/${params.name}?type=public&app_id=${import.meta.env.VITE_REACT_APP_ID}&app_key=${import.meta.env.VITE_REACT_APP_API_KEY}`)
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);
    };

    useEffect(() => {
        fetchDetails();

    }, [params.name]);

    return (
        <DetailWrapper>
            {details.recipe ? (
                <>
                    <div>
                        <h2>{details.recipe.label}</h2>
                        <Thumbnail src={details.recipe.images.REGULAR.url} alt="" />

                    </div>
                    <Info>

                        <Button className={activeTab == 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                        <Button className={activeTab == 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                        
                        {activeTab === 'ingredients' && (
                            <div>
                            <ol>
                                {details.recipe.ingredientLines.map((text, idx) => {
                                    return (
                                        <li key={idx}>{text}</li>
                                    );
                                })}
                            </ol>
                            </div>
                        )}

                        {activeTab === 'instructions' && (
                            <div>
                                <BigGreenButton href={details.recipe.url}> Click Here to Go To Full Recipe</BigGreenButton>
                            </div>

                        )}


                        {activeTab === 'ingredients' && (
                            <div>
                                {details.recipe.healthLabels.map((text, idx) => {
                                    return (
                                        <Tag key={idx}>{text}</Tag>
                                    );
                                })}
                            </div>
                        )}



                    </Info>
                </>
            ) : (
                <div>Loading...</div>
            )}



        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;
.active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
}
h2{
    margin=bottom: 2rem;
}
li {
    font-size: 1.5rem;
    line-height: 2.5rem;
}
ul {
    margin-top: 2.5rem;
}`;

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid blackl
margin-right: 2rem;
font-weight: 600;`;

const Info = styled.div
    `margin-left: 10rem;`;



const Tag = styled.div`

    display: inline-block;
    padding: 0.25rem 0.75rem; /* Adjust the padding to control the size of the pill */
    border-radius: 1rem; /* Make it rounded */
    background-color: #F2EFE9; /* Background color */
    color: #black; /* Text color */
    font-weight: bold;
    font-size: 12px; 
    margin-top: 2%;
    transform: translate(-20%);
`;

const BigGreenButton = styled.a`
display: inline-block;
background: linear-gradient(135deg, #000, #000);
color: #fff;
padding: 12px 24px;
text-align: center;
font-size: 18px;
border: 2px solid #000;
border-radius: 4px;
text-decoration: none;
cursor: pointer;
width: 200px;
margin-top: 20%;
transform: translate(25%);
transition: all 0.3s;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Subtle glow effect */

&:hover {
  background: linear-gradient(135deg, #111, #111);
  border: 2px solid #111;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Enhanced glow on hover */
}
`;

const Thumbnail = styled.img`

border-radius:2rem;

`


export default Recipe