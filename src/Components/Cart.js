import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom'
const Cart = () => {
const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
console.log(shoppingCart)

    return (
        <div>
            <div className="cart-container">
                <div className="cart-details">
                    {shoppingCart.length > 0 ?
                        shoppingCart.map(cart => (
                            <div className='cart' key={cart.id}>
                                <span className='cart-images'><img src={cart.image} alt='not found' height='80px' width='80px' /></span>
                                <span className='cart-product-name'>{cart.name}</span>
                                <span className='cart-product-price'>Rs.{cart.price}</span>
                                <span className='inc' onClick={() => dispatch({ type: 'INC', id: cart.id, cart })}><i className='fa fa-plus'></i></span>
                                <span className='product-quantity'>{cart.qty}</span>
                                <span className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.id, cart })}><i className='fa fa-minus'></i></span>
                                <span className='product-total-price'>Rs.{cart.price * cart.qty}</span>
                                <span className='delete-product' onClick={() => dispatch({ type: 'DELETE', id: cart.id, cart })}><i className='fa fa-trash-o'></i></span>
                            </div>
                        ))
                        : 'Sorry your cart is empty'}
                </div>
                {shoppingCart.length > 0 ?
                    <div className='cart-summary'>
                        <div className='summary'>
                            <h2>Cart Summary</h2>
                            <div className='total-items'>
                                <div className='items'>Total Items</div>
                                <div className='items-count'>{qty}</div>
                            </div>
                            <div className='total-price-section'>
                                <div className='just-title'>Total Price</div>
                                <div className='items-price'>Rs.{totalPrice.toFixed(2)}</div>
                            </div>
                            <Link to='/buynow' className='addtocart'>Buy Now</Link>
                        </div>
                    </div>
                    : ''}
            </div>
        </div>
    )
}
export default Cart;