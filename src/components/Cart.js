import React from 'react'
import { useSelector } from 'react-redux'
import CheckOut from './CheckOut';
import cart from '../Images/cart.png'
import '../components/Cart.css'
import { Link } from 'react-router-dom';


export default function Cart() {

    let basket = useSelector(state => state.basket);
    console.log(basket);

    let checkOutDet = basket.map(item => <CheckOut img={item.img} Price={item.price} Title={item.title} Model={item.model} />)
    return (
        <div className = 'A__1'>
            <div className="carthead container">
                <div className="carttop ">
                
                        <img src={cart} alt = "" />
                        
                        

                    <div className='Deal' >
                      
                            <h3 className='Deal1'>Today Deal</h3>
                        
                        
                  <Link to = './pay'>   <button>Place Order</button></Link> 
                        

                    </div>
                </div>

           

            </div>
            <div> {checkOutDet}</div>
        </div>
    )
}
