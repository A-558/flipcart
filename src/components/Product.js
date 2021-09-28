import React from 'react'
import './Product.css'
import {useDispatch} from 'react-redux'
import StarIcon from '@material-ui/icons/Star';
import ff from '../Images/1.png'


export default function Product({img,Title,Price,Model,Rating}) {

    let dispatch = useDispatch()
    return (

        <div>
            <div className = 'ProCk__A'>
               
             
            <div className = 'Pro__AA'>
                <img src = {img} alt = ""/>
            </div>
            <div className='ProCk__details'>
                <img src = {ff} alt = ""/>
            <span className = 'ProCk__AK'> {Title}</span><br></br> 
                   
            <span>Model: {Model}</span><br></br>
            <span className = 'ProCk__A1'>Price : ₹ {Price}</span><br></br>
            <div >
            <span className = 'Pro__A2' > {Rating}   <StarIcon/></span>
            
   
            
            </div>
            
            
          
          
            <button onClick= {()=> dispatch({type : 'ADD_TO_CART', item :{ img : img ,title : Title, model : Model , price :Price}})}>Add to Cart</button>
           
        </div>

        </div>
        </div>
    )
}
