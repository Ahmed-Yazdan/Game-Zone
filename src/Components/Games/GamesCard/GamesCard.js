import { Grid } from '@mui/material';
import React, { useNavigate } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./GamesCard.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GamesCard = (props) => {
    const { name, type, image_url, price, id, unique_id } = props.game;
    const showButton = props.showButton;

    const perType = type.split(',');

    const url = `/purchase/:${unique_id}`;

    // const handleOnClick = (data) => {

    // }

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card>
                <CardMedia
                    component="img"
                    sx={{ height: '300px' }}
                    image={image_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <div className="types-container">
                        {
                            perType.map(value => <button className="types-button">{value}</button>)
                        }
                    </div>
                </CardContent>
                {
                    showButton == true ?
                        <CardActions>
                            <Link to={url}>
                                <button className="bottom-button" size="small">Buy now ${price}</button>
                            </Link>
                        </CardActions>
                        :
                        null
                }
            </Card>
        </Grid>
    );
};

export default GamesCard;
































/* 


 <div className='container'>
            <div className='card'>
            <div className='imageDiv'>
                <img src="https://assets.xboxservices.com/assets/3d/1a/3d1af36a-b0b2-41c8-95b7-e4e71c146674.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x609_03.jpg" alt="" />
            </div>
            <div className='contentsDiv'>
                <h1>Forza Horizon 5</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veritatis asperiores deleniti? Iure, odio? Necessitatibus amet ratione, quasi porro optio alias fuga, fugiat nostrum, quisquam laudantium tenetur asperiores fugit. Rem incidunt nisi ut fugit praesentium, quibusdam obcaecati sapiente consequatur blanditiis! Atque quod voluptatem hic unde aliquam qui error cum excepturi! Qui exercitationem est ipsum! Aspernatur adipisci dolorem, ab sequi illo deserunt perferendis maiores nisi ducimus cum cupiditate cumque, delectus recusandae vero omnis aliquid quo ipsam architecto similique nemo corrupti? Amet odit et aliquid praesentium sapiente, mollitia optio animi modi eligendi distinctio voluptas maiores, temporibus doloremque pariatur, doloribus suscipit accusamus iure. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maiores cupiditate praesentium assumenda voluptates, cum numquam unde laudantium dolorem quidem earum qui enim amet libero ab nulla vitae at dicta aut doloremque! Exercitationem dignissimos eius nobis quia ipsa quam, odit maiores libero reprehenderit illum cumque aperiam nemo tenetur harum corporis animi itaque aut veniam totam voluptas tempore ut. Iure, inventore dolorem culpa illum voluptate perspiciatis rerum optio. Minus velit omnis esse corrupti illum aliquam voluptates, fugit adipisci officia sunt eum, rem quia temporibus laboriosam earum fugiat accusantium. Reiciendis debitis culpa ducimus animi, nulla aliquid voluptate porro molestias odit? Debitis, quos.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quasi odit tempore saepe, recusandae velit? Vitae quia minima sequi.</p>
            </div>
        </div>
        <div className='card'>
            <div className='imageDiv'>
                <img src="https://assets.xboxservices.com/assets/3d/1a/3d1af36a-b0b2-41c8-95b7-e4e71c146674.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x609_03.jpg" alt="" />
            </div>
            <div className='contentsDiv'>
                <h1>Forza Horizon 5</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quasi odit tempore saepe, recusandae velit? Vitae quia minima sequi.</p>
            </div>
        </div>
        <div className='card'>
            <div className='imageDiv'>
                <img src="https://assets.xboxservices.com/assets/3d/1a/3d1af36a-b0b2-41c8-95b7-e4e71c146674.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x609_03.jpg" alt="" />
            </div>
            <div className='contentsDiv'>
                <h1>Forza Horizon 5</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quasi odit tempore saepe, recusandae velit? Vitae quia minima sequi.</p>
            </div>
        </div>
        <div className='card'>
            <div className='imageDiv'>
                <img src="https://assets.xboxservices.com/assets/3d/1a/3d1af36a-b0b2-41c8-95b7-e4e71c146674.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x609_03.jpg" alt="" />
            </div>
            <div className='contentsDiv'>
                <h1>Forza Horizon 5</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur quasi odit tempore saepe, recusandae velit? Vitae quia minima sequi.</p>
            </div>
        </div>
        </div> 
        */