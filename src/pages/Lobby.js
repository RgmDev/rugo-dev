import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Box, Stack, Button, IconButton  } from '@mui/material';
import { Fade, Flip, Zoom } from 'react-reveal';

import { SiGithub, SiLinkedin, SiCodepen } from 'react-icons/si';

import { NavLinkItems } from '../utils/NavLinkItems';

export default function Lobby() {

  useEffect(() => {
    console.log('Lobby page');
    document.title = "rugo.dev | Lobby"
  });

  return (
    <>
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
            <span id='lobby-main-subtitle'>Be code my friend ...</span>
          </Zoom>
        </Box>
        <Box>
          <Stack direction="row" spacing={2}>
            <Zoom left delay={1500}>
              <a href='https://www.linkedin.com/in/ruben-gonzalez-martin/' target='_blank' rel='noreferrer'>
                <IconButton color='primary' aria-label='linkedin'>
                  <SiLinkedin size='1.5em' id='lobby-linkedin-icon' />
                </IconButton>
              </a>
            </Zoom>
            <Zoom bottom delay={2300}>
              <a href='https://github.com/RgmDev' target='_blank' rel='noreferrer'>
                <IconButton color='primary' aria-label='github'>
                  <SiGithub size='1.5em' id='lobby-github-icon' />
                </IconButton>
              </a>
            </Zoom>
            <Zoom right delay={1800}>
              <a href='https://codepen.io/rgmdev' target='_blank' rel='noreferrer'>
                <IconButton color='primary' aria-label='codepen'>
                  <SiCodepen size='1.5em' id='lobby-codepen-icon' />
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
    </>
  )
}