import './navbar.css';
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import LogoEcommerce from '../Logo/LogoEcommerce';


const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', color: 'yellow', backgroundImage:'./img/Navbar.gif', fontSize: '1.1rem',}}>
            <div>
                <LogoEcommerce/>                
            </div>
            
            <div>                
                <Link to={`/category/perfumes masculinos`}>Perfumes Masculinos</Link>
                <Link to={`/category/perfumes femeninos`}>Perfumes Femeninos</Link>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar
