import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Box, Stack, Button, IconButton  } from '@mui/material';
import { LogoLinkedin, LogoGithub, LogoCodepen } from 'react-ionicons';
import { Fade, Flip, Zoom } from 'react-reveal';

import { NavLinkItems } from '../utils/NavLinkItems'

export default function Lobby() {

  useEffect(() => {
    
  });

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column' },
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F6EFE3',
          overflow: 'hidden',
          height: '100vh',
        }}
      >
        <Box className="lobby-title" 
          sx={{
          mb: 3,
          display: 'flex',
          flexDirection: { xs: 'column' },
          alignItems: 'center',
          color: '#F6EFE3',
          }}
        >
  
          <Fade top cascade>
            <span id='lobby-main-title'>rugo.dev</span>  
          </Fade>
          <Zoom right delay={800} top cascade>
            <span id='lobby-main-subtitle'>Be code my friends ...</span>
          </Zoom>
              
        </Box>
        <Box>
          <Stack direction="row" spacing={1}>
            <Zoom left delay={1500}>
              <a href='https://www.linkedin.com/in/ruben-gonzalez-martin/' target='_blank'>
                <IconButton color='primary' aria-label='linkedin'>
                  <LogoLinkedin
                    color={'#004EB3'}
                    height='50px'
                    width='50px'
                  />
                </IconButton>
              </a>
            </Zoom>
            <Zoom bottom delay={2300}>
              <a href='https://github.com/RgmDev' target='_blank'>
                <IconButton color='primary' aria-label='github'>
                  <LogoGithub
                    color={'#EE1C24'} 
                    height='50px'
                    width='50px'
                  />
                </IconButton>
              </a>
            </Zoom>
            <Zoom right delay={1800}>
              <a href='https://codepen.io/rgmdev' target='_blank'>
                <IconButton color='primary' aria-label='codepen'>
                  <LogoCodepen
                      color={'#F6EFE3'} 
                      height='50px'
                      width='50px'
                    />
                </IconButton>
              </a>
            </Zoom>
          </Stack>
        </Box>
        <Box className='lobby-nav-links'
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column' },
            alignItems: 'center',
          }}
        >
        {NavLinkItems.map((item, index) => (
          <Box key={'nav-item-'+index} sx={{ mt: 2 }}>
            <Flip top delay={item.delay} duration={500}><Button as={NavLink} to={item.url}>{item.text}</Button></Flip>
          </Box>
        ))}
        </Box>
      </Box>
    </Container>
  )
}