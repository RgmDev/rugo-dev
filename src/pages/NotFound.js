import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button  } from '@mui/material';
import { Fade, Flip, Zoom } from 'react-reveal';

import { NavLinkItems } from '../utils/NavLinkItems';

export default function NotFound() {

  useEffect(() => {
    console.log('Lobby page');
    document.title = "rugo.dev | 404 Not Found"
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
            <span id='lobby-main-title'>404</span>  
          </Fade>
          <Zoom right delay={800} top cascade>
            <span id='lobby-main-subtitle'>Not found</span>
          </Zoom>
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