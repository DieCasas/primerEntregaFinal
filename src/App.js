import '../src/App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** Componentes */
import NavBar from './Componentes/NavBar';
import Home from './Componentes/home/Home'
import Veggie from './Componentes/Veggie/Veggie'
import Nosotros from './Componentes/Nosotros/Nosotros'

function App() {
  return (
    <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Ofertas' element={<Veggie/>} />
            <Route path='/Nosotros' element={<Nosotros />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
