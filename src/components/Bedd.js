import React from 'react'
import './Bedd.css'
import {  useDispatch } from 'react-redux'
import StarIcon from '@material-ui/icons/Star';
import ff from '../Images/1.png'



export default function Product({ img, Title, Price, Model, Rating }) {

    let dispatch = useDispatch()
    return (
<div>
        
            
            <div className='P__A'>


                <div className='P__AA'>
                    <img src= {img} alt = "" />
                   
                </div>
               
                <div className='P__details'>
                    <div className = 'pp'>
                    <img src= {ff} alt = "" />
                    </div>
                    <span className='P__AK'> {Title}</span><br></br>

                    <span className = 'P__AK'>Model: {Model}</span><br></br>
                    <span className='P__A1'>Price : ₹ {Price}</span><br></br>
                    <div >
                        <span className='P__A2' > {Rating}   <StarIcon /></span>
   



                    </div>

                    <div className = 'A__A'>
                    <button onClick={() => dispatch({ type: 'ADD_TO_CART', item: { img: img, title: Title, model: Model, price: Price } })}>Add to Cart</button>
                  
                   <div className = 'A__B'> <button className = 'but'> BUY Now</button></div>
                    </div>
                        
                    
                   </div>

                </div>
                    
            </div>
            
        
    )
}


