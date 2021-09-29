
import { useDispatch} from 'react-redux'
import './CheckOut.css'

export default function  CheckOut({img,Model,Title,Price}) {
    let dispatch = useDispatch()
  
    return(

        <div className = 'check__A'>
               
     
     <div className ='check__AA'>
         <img src = {img} alt = ""/>
     </div>
     <div className='check__details'>
     <span className = 'check__AK'> {Title}</span><br></br> 
            
     <span>Model: {Model}</span><br></br>
     <span className = 'check__A1'>Price : ₹ {Price}</span><br></br>
     Rating
     
     <button onClick = {()=>dispatch({type : 'REMOVE_FROM_CART',img : img})}>Remove from Cart</button>
     
   
     
 </div>
 
 </div>
)
    
}
