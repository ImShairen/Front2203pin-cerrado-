import './App.css';
import Dos from './Components/Dos/Dos';
import Tres from './Components/Tres/Tres';
import Cuatro from './Components/Cuatro/Cuatro';
import Cinco from './Components/Cinco/Cinco';
import Seis from './Components/Seis/Seis';
import Prueba from './Components/Prueba/Prueba';
import NavBar from './NavBar/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<h1>Home</h1>} />
            <Route exact path="/dos/dos" element={<Dos />} />
            <Route exact path="/tres/tres" element={<Tres />} />
            <Route exact path="/cuatro/cuatro" element={<Cuatro />} />
            <Route exact path="/cinco/cinco" element={<Cinco />} />
            <Route exact path="/seis/seis" element={<Seis />} />
            <Route exact path="/prueba/prueba" element={<Prueba />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
