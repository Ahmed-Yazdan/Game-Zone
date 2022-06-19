import React, { useEffect, useState } from 'react';
import GamesCard from '../../Components/Games/GamesCard/GamesCard';
import "./Games.css";
import { experimentalStyled as styled } from '@mui/material/styles';
import { Box, Grid, Container } from '@mui/material';
import NavbarCustom from '../../Components/Home/NavbarCustom/NavbarCustom';

const Games = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                console.log(data);
            })
    }, []);

    return (
        <div>
            <NavbarCustom/>
            <Box sx={{ flexGrow: 1 }}>
            <Container >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        games.map(game => 
                                <GamesCard game={game} key={game.unique_id}/>
                        )
                    }
                </Grid>
            </Container>
        </Box>
        </div>
        
    );
};

export default Games;