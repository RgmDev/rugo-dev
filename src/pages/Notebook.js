import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

import Navigation from '../components/Navigation';
import { Container, Box, Drawer, Button, List, ListItem, ListItemIcon, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GiNotebook } from 'react-icons/gi'


import { notes } from "../utils/notes";

export default function Notebook() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [subject, setSubject] = useState(notes[0]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(open);
  };

  marked.setOptions({
    breaks: true
  });

  useEffect(() => {
    console.log('Notebook page ');
  });

  const list = () => (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {notes.map((item, index) => (
          <ListItem button key={item.text} onClick={()=>{setSubject(item)}}>
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
    <div>
      <Navigation />
      <Container maxWidth="lg" sx={{mt: 12}}>
        
        <Button 
          onClick={toggleDrawer(true)}
          color="primary"
          startIcon={<GiNotebook />}
          variant="contained"
          sx={{mb: 3}}
        >
          Subjects
        </Button>
        <Drawer
          anchor={'bottom'}
          open={showDrawer}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
        <Typography variant="h4" sx={{mb: 1}}>
          {subject.text}
        </Typography>
        


        {subject.notes.map((item, index) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel-content'
              id={'panel-header-'+index}
              key={'subject-container-'+index}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div dangerouslySetInnerHTML={{
                __html: marked(item.content)
              }} />
            </AccordionDetails>
          </Accordion>
        ))}
    
      </Container>
    </div>
  )
}