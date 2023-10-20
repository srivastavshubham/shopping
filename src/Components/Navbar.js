import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {CartContext} from './CartContext'
const Navbar=()=>{
    const {qty}=useContext(CartContext);
    const data=localStorage.getItem('user');
    const logout=()=>{
        localStorage.removeItem('user');
        window.location.reload()
    }
    return(
        <div style={{marginBottom:'100px'}}>
        <nav>
        <ul className='left'>
            <li><Link to='/'>Shopping</Link></li>
            </ul>
            <ul className='right'>
                <li>
                    {data === null ? 
                    <Link to="/login" className='logout'>Login</Link>
                    :<span className='logout' onClick={logout}>Logout</span>}
                    {data === null ? "":<a href="#welcome" className='logout'>Welcome:{data}</a>}
                    <Link to="/cart">
                        <span className='shoppingcart'><i className="fa fa-shopping-cart"></i></span>
                        <span className='cartcount'>{qty}</span>
                    </Link>
                   
                    </li>
                </ul>
        </nav>
        </div>
    )
}
export default Navbar;