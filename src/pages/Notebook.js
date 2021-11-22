import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Drawer, 
  Button, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  TableContainer,
  Table, 
  TableHead,
  TableBody,
  TableRow, 
  TableCell,
  tableCellClasses,
  Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Markdown, Renderers, DEFAULT_MARKDOWN_RENDERERS } from "react-marked-renderer";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { GiNotebook } from 'react-icons/gi';

import { notes } from "../utils/notes";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#004EB3',
    color: '#F6EFE3',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const renderers: Renderers = {
  ...DEFAULT_MARKDOWN_RENDERERS,
  table: function CustomTable({ children }) {
    console.log(children.TableHead)
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          {children}
        </Table>
      </TableContainer>
    );
  },

  thead: function CustomTableHead({ children }) {
    return (
      <TableHead>
        {children}
      </TableHead>
    );
  },

  tbody: function CustomTableBody({ children }) {
    return (
      <TableBody>
        {children}
      </TableBody>
    );
  },

  tr: function CustomTableRow({ children }) {
    return (
      <StyledTableRow>
        {children}
      </StyledTableRow>
    );
  },

  th: function CustomTableHeadCell({ children }) {
    return (
      <StyledTableCell>
        {children}
      </StyledTableCell>
    );
  },

  td: function CustomTableHeadCell({ children }) {
    return (
      <TableCell>
        {children}
      </TableCell>
    );
  },

};


export default function Notebook() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [subject, setSubject] = useState(notes[0]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    console.log('Notebook page ');
    document.title = "rugo.dev | Notebook";
  });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setShowDrawer(open);
  };
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  

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
        <Drawer
          anchor={'bottom'}
          open={showDrawer}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>

        <Button 
          onClick={toggleDrawer(true)}
          color="primary"
          startIcon={<GiNotebook />}
          variant="contained"
          sx={{mb: 3}}
        >
          Subjects
        </Button>
        <Typography variant="h4" sx={{mb: 1}}>
          {subject.icon} {subject.text}
        </Typography>
        
        {subject.notes.map((item, index) => (
          <Accordion expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel-content'
              id={'panel-header-'+index}
              key={'subject-container-'+index}
            >
              <Typography>{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Markdown 
                markdown={item.content} 
                renderers={renderers}
              />
            </AccordionDetails>
          </Accordion>
        ))}

    </div>
  )
}