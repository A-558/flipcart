import React from 'react'
import logo from '../Images/f.jpeg'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import OrderIcon from '@material-ui/icons/CallToActionRounded'
import PlusIcon from '@material-ui/icons/AddAlertRounded'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useSelector } from 'react-redux';

import { Link} from 'react-router-dom';


export default function Header() {
    let basket = useSelector(state => state.basket);
    console.log(basket);
    

  
    

    
    return (
        <div>
            <div className='header__main'>
                <div className='header__section1'>

                    <Link to='/'>
                        <div className='Header__logo'>

                            <img src={logo} alt = "" />

                        </div>
                    </Link>
                    <div className='section__input'>

                        <input type='search' placeholder='Search for product and more ' />
                        <SearchIcon className='header__search1' />
                    </div>
                    <div className='section__2'>
                       
                        <div class="dropdown">
                   <button>Login</button>
                      <div class="dropdown-content">
                                <p className = 'icon'><AccountCircleIcon/>  Profile</p>
                                <p><PlusIcon/> Pluse Zone</p>
                                <p><OrderIcon/>  Orders</p>
                               
                                <p><CardGiftcardIcon/>  Gift Card</p>
                                <a href="http://localhost:3000/log"><LinkedInIcon/>  Sign-Up</a>
                            </div>
                            </div>
                      
                      
                        <div class="dropdown">
                            <h4 className='More'>More</h4>
                            <div class="dropdown-content">
                                <p>Notification preferences</p>
                                <p>Deails</p>
                                <p>24 x 7 customer care</p>
                                <p href="http://localhost:3000/">Home</p>
                                <p>Download App</p>
                            </div>
                        </div>
                        <Link to='/cart'>

                            <div className='A__cart'>

                                <p className='ADD'>Cart</p>
                                
                               
                                <ShoppingCartOutlinedIcon  style={{ fontSize: 50 }} className='AA__CC' />
                                <span className='cart__count'>{basket.length}</span>


                            </div>
                        </Link>
                    </div>

           
                </div>


            </div>
        </div>



    )
}
