import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const [userData, setUserData] = useState({});

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log('clickedesajfhsdjifhjksadf')
    };

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = {...userData};
        newUserData[field] = value;
        setUserData(newUserData);
        console.log(userData);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <form
                        style={{
                            display: 'flex',
                            alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                            width: '100%',
                            marginTop: '30px'
                        }} onSubmit={handleOnSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            className='textField'
                            onChange={handleOnChange}
                        />
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            className='textField'
                            onChange={handleOnChange}
                        />
                        <button className='types-button' type="submit">
                            Login
                        </button>
                        <NavLink to='/register'>
                        <Button sx={{mt:5}} variant='text'>New to this site? Register now !</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;