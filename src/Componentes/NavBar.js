import '../App.css'
import {Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="containerLista">  
                <ul className="lista">
                    <div>
                        <Link to='/'>Comidas no Veggie
                        </Link>
                    </div>    
                    <Link to='/ofertas'>Veggie</Link>
                    <Link to='/Nosotros'>Nosotros</Link>
                </ul>
            </div> 
            
        </nav>
    )
}
export default NavBar ;