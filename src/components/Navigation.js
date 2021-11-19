import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { NavLinkItems } from '../utils/NavLinkItems'

export default function Navigation() {

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavLinkItems.map((item, index) => (
          <ListItem className='main-nav-item' as={NavLink} to={item.url} button key={item.text}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
          
      <Drawer
        open={showDrawer}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>

      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography id='nav-main-title' as={NavLink} to='/' variant='h6' component='div' sx={{ flexGrow: 1 }}>
            rugo.dev
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}