import React from 'react';
import { FaTrash, FaSync } from 'react-icons/fa';
import styled from 'styled-components';

const CoolButton = styled.button`
  background: linear-gradient(35deg, #494949, #313131);;
  border: none;
  border-radius: 50px;
  padding: 16px 32px;
  color: white;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  margin-bottom: 2%;

  &:hover {
    background: linear-gradient(35deg, #494949, #313131););
    transform: scale(1.05);
  }
`;

const ButtonText = styled.span`
  margin-right: 10px;
`;

const IconWrapper = styled.span`
  font-size: 24px;
`;

function CoolClearButton() {
    const handleClearLocalStorage = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <CoolButton className="cool-button" onClick={handleClearLocalStorage}>

            <ButtonText>
                <IconWrapper>
                    <FaSync />
                </IconWrapper>
                Refresh
            </ButtonText>
        </CoolButton>
    );
}

export default CoolClearButton;
