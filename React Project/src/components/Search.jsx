import { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const handleFocus = () => {
    setExpanded(true);
  };

  const handleBlur = () => {
    if (input === '') {
      setExpanded(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
  };

  return (
    <FormStyle
      onSubmit={submitHandler}
      $expanded={expanded ? true : undefined} // Use $ to pass only when true
    >
      <div>
        <FaSearch />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem auto;
  max-width: 40%;
  transition: max-width 0.5s;

  ${(props) =>
    props.$expanded &&
    css`
      max-width: 60%;
    `}

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
