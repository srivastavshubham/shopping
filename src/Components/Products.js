import React, { useContext,useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { CartContext } from '../Components/CartContext'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      axios.get('https://fakestoreapi.com/products')
        .then((response) => {
          let aa=response.data.map(x=>{return {"id":x.id,"name":x.title,"category":x.category,"price":x.price,"image":x.image,"description":x.description}})
          setProducts(aa);
        })
        .catch((error) => {
          console.error('error', error);
        });
    }, []);

    const { dispatch } = useContext(CartContext);
    const clothesData = products.filter((result) => result.category === "men's clothing")
    const accessoriesData = products.filter((result) => result.category === "jewelery")
    const homeData = products.filter((result) => result.category === "electronics")
    const groceryData = products.filter((result) => result.category === "women's clothing")
    const data = localStorage.getItem('user');

    return (
        <div>
            <div className="row product-tab">
                <div className="col-2">
                    <div className="nav flex-column nav-pills side" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <a className="nav-link active" id="all-data-tab" data-toggle="pill" href="#all-data" role="tab" aria-controls="all-data" aria-selected="true">All Category</a>
                        <a className="nav-link" id="mens-data-tab" data-toggle="pill" href="#mens-data" role="tab" aria-controls="mens-data" aria-selected="false">Mens Clothes</a>
                        <a className="nav-link" id="jwelery-data-tab" data-toggle="pill" href="#jwelery-data" role="tab" aria-controls="jwelery-data" aria-selected="false">Jewelery</a>
                        <a className="nav-link" id="women-data-tab" data-toggle="pill" href="#women-data" role="tab" aria-controls="women-data" aria-selected="false">Women Clothes</a>
                        <a className="nav-link" id="eletric-data-tab" data-toggle="pill" href="#eletric-data" role="tab" aria-controls="eletric-data" aria-selected="false">Electronics</a>
                    </div>
                </div>
                <div className="col-10">
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="all-data" role="tabpanel" aria-labelledby="all-data-tab">
                            <div className='container'>
                                <div className='products'>
                                    {products.map((product) => (
                                        <div className='product' key={product.id}>
                                            <div className='product-image'>
                                                <img src={product.image} alt='pic not found' width='200px' height='200px' />
                                            </div>
                                            <div className='product=details'>
                                                <div className='product-name'>
                                                    {product.name}
                                                </div>
                                                <div className='product-category'>
                                                    {product.category}
                                                </div>
                                                <div className='product-price'>
                                                    Rs.{product.price}
                                                </div>
                                            </div>
                                            <div>
                                            {data === null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button> :
                                            <button className='addtocart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>Add to cart</button>}
                                            <Link to='/buynow'><button className='buynow' onClick={() => dispatch({ type: 'BUY_NOW', id: product.id, product })}>Buy now</button></Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="mens-data" role="tabpanel" aria-labelledby="mens-data-tab">
                            <div className='container'>
                                <div className='products'>
                                    {clothesData.map((product) => (
                                        <div className='product' key={product.id}>
                                            <div className='product-image'>
                                                <img src={product.image} alt='pic not found' width='200px' height='200px' />
                                            </div>
                                            <div className='product=details'>
                                                <div className='product-name'>
                                                    {product.name}
                                                </div>
                                                <div className='product-category'>
                                                    {product.category}
                                                </div>
                                                <div className='product-price'>
                                                    Rs.{product.price}
                                                </div>
                                            </div>
                                            <div >
                                                {data === null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button> :
                                                <button className='addtocart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>Add to cart</button>}
                                                <Link to='/buynow'><button className='buynow' onClick={() => dispatch({ type: 'BUY_NOW', id: product.id, product })}>Buy now</button></Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="jwelery-data" role="tabpanel" aria-labelledby="jwelery-data-tab">
                            <div className='container'>
                                <div className='products'>
                                    {accessoriesData.map((product) => (
                                        <div className='product' key={product.id}>
                                            <div className='product-image'>
                                                <img src={product.image} alt='pic not found' width='200px' height='200px' />
                                            </div>
                                            <div className='product=details'>
                                                <div className='product-name'>
                                                    {product.name}
                                                </div>
                                                <div className='product-category'>
                                                    {product.category}
                                                </div>
                                                <div className='product-price'>
                                                    Rs.{product.price}
                                                </div>
                                            </div>
                                            <div >
                                                {data === null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button> :
                                                <button className='addtocart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>Add to cart</button>}
                                                <Link to='/buynow'><button className='buynow' onClick={() => dispatch({ type: 'BUY_NOW', id: product.id, product })}>Buy now</button></Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="women-data" role="tabpanel" aria-labelledby="women-data-tab">
                            <div className='container'>
                                <div className='products'>
                                    {groceryData.map((product) => (
                                        <div className='product' key={product.id}>
                                            <div className='product-image'>
                                                <img src={product.image} alt='pic not found' width='200px' height='200px' />
                                            </div>
                                            <div className='product=details'>
                                                <div className='product-name'>
                                                    {product.name}
                                                </div>
                                                <div className='product-category'>
                                                    {product.category}
                                                </div>
                                                <div className='product-price'>
                                                    Rs.{product.price}
                                                </div>
                                            </div>
                                            <div >
                                                {data === null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button> :
                                                <button className='addtocart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>Add to cart</button>}
                                                <Link to='/buynow'><button className='buynow' onClick={() => dispatch({ type: 'BUY_NOW', id: product.id, product })}>Buy now</button></Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="eletric-data" role="tabpanel" aria-labelledby="eletric-data-tab">
                            <div className='container'>
                                <div className='products'>
                                    {homeData.map((product) => (
                                        <div className='product' key={product.id}>
                                            <div className='product-image'>
                                                <img src={product.image} alt='pic not found' width='200px' height='200px' />
                                            </div>
                                            <div className='product=details'>
                                                <div className='product-name'>
                                                    {product.name}
                                                </div>
                                                <div className='product-category'>
                                                    {product.category}
                                                </div>
                                                <div className='product-price'>
                                                    Rs.{product.price}
                                                </div>
                                            </div>
                                            <div >
                                                {data === null ? <button type="button" className='addtocartdisable' disabled>Add to cart</button> :
                                                <button className='addtocart' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.id, product })}>Add to cart</button>}
                                                <Link to='/buynow'><button className='buynow' onClick={() => dispatch({ type: 'BUY_NOW', id: product.id, product })}>Buy now</button></Link></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;