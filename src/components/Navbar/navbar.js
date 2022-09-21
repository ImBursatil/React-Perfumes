import './navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import LogoEcommerce from '../Logo/LogoEcommerce';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around', color: 'yellow', backgroundColor:'rgb(20,20,20)', fontSize: '1.1rem',}}>
            <div>
                <LogoEcommerce/>                
            </div>
            
            <div>                
                <button style={{ display: 'center', color: 'green', borderRadius: '80px 20px', fontWeight: 'bold', fontFamily:'verdana', fontSize: '1.1rem', margin: '50px',}}>Perfumes Masculinos</button>
                <button style={{ display: 'center', color: 'red', borderRadius: '80px 20px', fontWeight: 'bold', fontFamily:'verdana', fontSize: '1.1rem',}}>Perfumes Femeninos</button>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar
