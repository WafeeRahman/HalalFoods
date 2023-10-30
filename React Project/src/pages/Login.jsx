import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(0, 30%);
`;

const Card = styled(motion.div)`
  width: 400px;
  padding: 20px;
  background-color: #000;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 0 0 20px;
  color: #fff;
`;

const Label = styled.label`
  color: #fff;
  font-size: 18px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  background: transparent;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: #fff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
  &:hover {
    background-color: #000;
    color: #fff;
    transform: scale(1.1);
  }
`;

function Login() {

  const [values, setValues] = useState({
    name: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
  }
  
  axios.defaults.withCredentials = true;
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    axios.post('http://localhost:3000/login', values)
      .then(res => {
        if(res.data.Login) {
          
          navigate('/')
          window.location.reload();
        }
        else {
          alert("Login Failed")
        }
        console.log(res);
        
        
      })
      .catch(err => console.log(err));
  }


  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Card
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ type: 'spring', damping: 10, stiffness: 100 }}
        >
          <Title>Login</Title>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="Username" name="username" onChange={handleInput} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="Password" name="password" onChange={handleInput} />
          <Button>Log In</Button>
        </Card>
      </form>
    </Container>
  );
}

export default Login;
