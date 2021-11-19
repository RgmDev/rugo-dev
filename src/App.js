import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Lobby from './pages/Lobby';
import Notebook from './pages/Notebook';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Lobby /> }></Route>
        <Route exact path='/notebook' element={ <Notebook /> }></Route>
        <Route exact path='/portfolio' element={ <Portfolio /> }></Route>
        <Route exact path='/about-me' element={ <AboutMe /> }></Route>
        <Route exact path='/contact' element={ <Contact /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;