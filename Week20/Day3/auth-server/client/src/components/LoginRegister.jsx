import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField as Textfield } from '@mui/material';
import { AuthContext } from '../App';


const LoginRegister = ({ mode }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setToken } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginregister = async () => {
        if (mode === "Login") {
          try {
            const response = await axios.post(
              "http://127.0.0.1:5000/user/login",
              {
                email,
                password,
              },
              { withCredentials: true }
            );
    
            if (response.status === 200) {
              setMessage(response.data.message);
              console.log(response.data);
              setToken(response.data.accessToken);
              navigate('/')
            }
          } catch (error) {
            console.log(error);

            setToken(null);

            setMessage(error.response.data.message);
          }
        } else if (mode === "Register") {
            try {
                const response = await axios.post(
                  "http://127.0.0.1:5000/user/register",
                  {
                    email,
                    password,
                  },
                  { withCredentials: true }
                );
        
                if (response.status === 201) {
                  setMessage(response.data.message);
                  console.log(response.data);
                  navigate('/login')
                }
              } catch (error) {
                console.log(error);
                setMessage(error.response.data.message);
              }
        }
      };
   
    

    return (
        <>
            <h2>{mode}</h2>
            <Box component={'form'} sx={{m:1}} noValidate autoComplete='off'>
                <Textfield 
                    sx={{m:1}}
                    id='email'
                    type='email'
                    label='Enter your email'
                    variant='outlined'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Textfield                     
                    sx={{m:1}}
                    id='password'
                    type='password'
                    label='Enter your password'
                    variant='outlined'
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </Box>    
            <Button variant='contained' onClick={loginregister}>{mode}</Button>
            <div>{message}</div>
        </>
    )
}


export default LoginRegister;