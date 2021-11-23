import React, { useEffect, useState } from 'react';
import { Container, Grid, styled, Paper, Box } from '@material-ui/core';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

const NewCard = (props) => (
  <Card sx={{ 
    height: props.height,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }}
  md={{height: 500}}
  >

    <CardMedia
      sx={{ flexGrow: 1 }}
      component="img"
      image={props.img}
      alt="green iguana"
    />

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {props.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {props.text}
      </Typography>
    </CardContent>

    <CardActions>
      <a href={props.link} target='_blank'  rel='noreferrer'>
        <Button variant="contained" size='small'>View More</Button>
      </a>
    </CardActions>


  </Card>
)

export default function Portfolio() {

  useEffect(() => {
    console.log('Portfolio page');
    document.title = "rugo.dev | Portfolio"
  })

  return (
    <div>
      
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <NewCard 
            height={608} 
            title="GitHub profile"
            text="My repositories with projects in various programming languages. Nodejs, React, Angular..." 
            link="https://github.com/RgmDev"
            img="assets/img/github-logo.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={6}>
          <NewCard 
              height={300} 
              title="ServiBus Clima"
              text="Website for a leading company in spare parts for refrigeration equipment in transport vehicles. Made with Bootstrap and jQuery." 
              link="http://servibusclima.com/"
              img="assets/img/servibus-logo.png"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <NewCard 
              height={300} 
              title="Eletrojufer"
              text="Website for a cargo vehicle repair and maintenance company. Made with Bootstrap and jQuery." 
              link="http://www.electrojufer.es/index.php"
              img="assets/img/electrojufer-logo.png"
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <NewCard 
              height={300} 
              title="CodePen projects"
              text="My CodePen projects with FreeCodeCamp's exercises. React & Redux and D3.js examples." 
              link="https://codepen.io/rgmdev/pens/"
              img="assets/img/codepen-logo.png"
            />
          </Grid>
        </Grid>

        </Grid>
      </Grid>

    </div>
  )
}