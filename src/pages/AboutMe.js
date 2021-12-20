import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Container } from '@material-ui/core';

import { styled, Grid, Box, Paper, Button, IconButton, LinearProgress } from '@mui/material';
import { SiReact, SiAngular, SiPhp, SiNodedotjs, SiJava, SiJavascript, SiGit, SiMysql } from 'react-icons/si';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

export default function AboutMe() {

  const stackTech = [
    { icon: <SiReact size='3em' />, color: 'rgb(97, 218, 251)', value: 70 },
    { icon: <SiAngular size='3em' />, color: 'rgb(221, 0, 49)', value: 70 },
    { icon: <SiJavascript size='3em' />, color: 'rgb(240, 219, 79)', value: 70 },
    { icon: <SiGit size='3em' />, color: 'rgb(243, 79, 41)', value: 70 },
    { icon: <SiPhp size='3em' />, color: 'rgb(137, 147, 193)', value: 70 },
    { icon: <SiMysql size='3em' />, color: 'rgb(0, 97, 139)', value: 70 },
    { icon: <SiNodedotjs size='3em' />, color: 'rgb(144, 197, 63)', value: 70 },
    { icon: <SiJava size='3em' />, color: 'rgb(238, 31, 37)', value: 70 }
  ];

  useEffect(() => {
    console.log('AboutMe page');
    document.title = "rugo.dev | About Me"
  })

  return (
    <div>
      <Navigation />
      <Container maxWidth="lg">
        
        <h1>About me</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

        <h1>Stack Tech</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            {stackTech.map((item, index) => (
              <Grid item xs={12} md={6}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton sx={{color: item.color}}>
                    { item.icon }
                  </IconButton>
                  <Box sx={{ width: '100%', mr: 1, ml: 3 }}>
                    <LinearProgress variant="determinate" value={item.value} />
                  </Box>
                  <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2">{item.value+' %'}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}

          </Grid>
        </Box>


        <h1>Work experience</h1>
        <Timeline position="rigth">

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Full-stack
              </Typography>
              <Typography>ALSA</Typography>
              <Typography>Madrid</Typography>
              <Typography>Madrid</Typography>
              <Typography>Madrid es una ciudad de la hostie</Typography>
              <Typography>Madrid</Typography>
              <Typography>Madrid</Typography>
              <Typography>Madrid</Typography>
              <Typography>Madrid</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary" variant="outlined">
                <HotelIcon />
              </TimelineDot>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary">
                <RepeatIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>


      </Container>
    </div>
  )
}