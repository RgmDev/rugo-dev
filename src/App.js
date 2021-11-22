import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { Container } from '@mui/material';

import NotFound from './pages/NotFound';
import Lobby from './pages/Lobby';
import Notebook from './pages/Notebook';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

import Navigation from './components/Navigation';

import './App.css';
import { useEffect } from 'react';

const NavbarLayout = ({ children }) => ( 
  <Container maxWidth="lg" sx={{mt: 12}}>  
    <Navigation />
    {children}                                       
  </Container>
);

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="*" element={ <NotFound /> } />
        <Route exact path='/' element={ <Lobby /> }></Route>
        <Route exact path='/notebook' element={ <NavbarLayout><Notebook /></NavbarLayout> }></Route>
        <Route exact path='/portfolio' element={ <NavbarLayout><Portfolio /></NavbarLayout>} ></Route>
        <Route exact path='/about-me' element={ <NavbarLayout><AboutMe /></NavbarLayout> }></Route>
        <Route exact path='/contact' element={ <NavbarLayout><Contact /></NavbarLayout> }></Route>
      </Routes>
    </Router>
  );
}

export default App;