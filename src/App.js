import '../src/App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';

/** Componentes */
import NavBar from './Componentes/NavBar';
import Home from './Componentes/home/Home'
import Cart from './Componentes/Cart/Cart'


function App() {
  return (
    <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/Cart' element={<Cart />}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
