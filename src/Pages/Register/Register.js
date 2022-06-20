import { Button, Grid, TextField } from '@mui/material';
import { Container } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const [userData, setUserData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUserData = { ...userData };
        newUserData[field] = value;
        setUserData(newUserData);
        console.log(field, value, newUserData)
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if (userData.password !== userData.password2) {
            alert("Your password didn't match")
            return;
        }
        
    };

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
                            id="username"
                            name="username"
                            label="User name"
                            variant="standard"
                            className='textField'
                            onChange={handleOnChange}
                        />
                        <TextField
                            id="email"
                            name="email"
                            type="email"
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
                        <TextField
                            id="password"
                            name="password2"
                            label="Re-type password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            className='textField'
                            onChange={handleOnChange}
                        />
                        <button className='types-button' type="submit">
                            Login
                        </button>
                        <NavLink to='/login'>
                            <Button sx={{ mt: 5 }} variant='text'>Already have an account? Login !</Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;