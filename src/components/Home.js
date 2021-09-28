import React from 'react'
import './Home.css'
import head from '../Images/header__home.jpg'
import head2 from '../Images/header__teddy.png'
import head3 from '../Images/header_application.png'
import head4 from '../Images/header_electronics.png'
import head5 from '../Images/header_fashion.png'
import head6 from '../Images/header_gerocery.png'
import flipcart1 from '../Images/slider_1.jpg'
import flipcart2 from '../Images/slider_2.png'
import flipcart3 from '../Images/slider_3.jpg'
import flipcart4 from '../Images/slider_4.jpg'
import flipcart5 from '../Images/slider_5.jpg'
import main from '../Images/d1.jpeg'
import main2 from '../Images/d2.jpeg'
import main3 from '../Images/d3.jpeg'
import main4 from '../Images/d4.jpeg'
import main5 from '../Images/d5.jpeg'
import main6 from '../Images/d6.jpeg'
import main7 from '../Images/d7.jpeg'
import main8 from '../Images/d8.jpeg'
import main9 from '../Images/d9.jpeg'
import main10 from '../Images/d10.jpeg'
import main11 from '../Images/d11.jpeg'
import main12 from '../Images/d12.jpeg'
import main13 from '../Images/d13.jpeg'
import main14 from '../Images/d14.jpeg'
import main15 from '../Images/d16.jpeg'
import main16 from '../Images/m1.jpeg'

import { Link } from 'react-router-dom';





export default function home() {
    return (
        <div>
            <div className='image__1'>

            

                <div class="dropdown">
                    <Link to='/tv'>
                        <div className = 'ii'> <img src={head} alt = "" className='img__1' />
                            <p className = 'iii'>HOME</p>
                            
                        </div>
                    </Link>
                    <div class="dropdown-content">
                        <p>View All</p>
                        <p>Sell on flipcart</p>
                        <p>More options </p>
                        <p>search for more</p>
                        <p>Download App</p>
                    </div>
                </div>





                <div class="dropdown">
                    <div className = 'ii'> <img src={head2} alt = "" className='img__1' />
                        <p className = 'iii'>TEDDY</p></div>
                    <div class="dropdown-content">
                        <p>View All</p>
                        <p>Sell on flipcart</p>
                        <p>More options </p>
                        <p>search for more</p>
                        <p>Download App</p>
                    </div>
                </div>





                <div class="dropdown">
                    <div className = 'ii'> <img src={head3} alt = "" className='img__1' />
                        <p className = 'iii'>APPLICATIONS</p></div>
                    <div class="dropdown-content">
                        <p>View All</p>
                        <p>Sell on flipcart</p>
                        <p>More options </p>
                        <p>search for more</p>
                        <p>Download App</p>
                    </div>
                </div>


                <div class="dropdown">
                    <div className = 'ii'> <img src={head4} alt ="" className='img__1' />
                        <p className = 'iii'>ELECTRONICS</p></div>
                    <div class="dropdown-content">
                        <p>View All</p>
                        <p>Sell on flipcart</p>
                        <p>More options </p>
                        <p>search for more</p>
                        <p>Download App</p>
                    </div>
                </div>



                <div class="dropdown">
                    <div className = 'ii'> <img src={head5} alt = ""className='img__1' />
                        <p className = 'iii'>FASHION</p></div>
                    <div class="dropdown-content">
                        <p>View All</p>
                        <p>Sell on flipcart</p>
                        <p>More options </p>
                        <p>search for more</p>
                        <p>Download App</p>
                    </div>
                </div>


                <div class="dropdown">
                    <div className = 'ii'> <img src={head6} alt = ""className='img__1' />
                        <p className = 'iii'>GEROCERY</p></div>
                    <div class="dropdown-content">
                        <p>View All</p>
                        <p>Sell on flipcart</p>
                        <p>More options </p>
                        <p>search for more</p>
                        <p>Download App</p>
                    </div>
                </div>

           

            </div>

            <div className="coures" >
                <div id="imageCarousel" class="carousel slide " data-interval="1500" data-ride='carousel'>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={flipcart1} alt = "" class="img-responsive" />

                        </div>


                        <div class="carousel-item">
                            <img src={flipcart2} alt = "" class="img-responsive" />

                        </div>
                        <div class="carousel-item">
                            <img src={flipcart3} alt = "" class="img-responsive" />

                        </div>
                        <div class="carousel-item">
                            <img src={flipcart4} alt = "" class="img-responsive" />
                        </div>
                        <div class="carousel-item">
                            <img src={flipcart5} alt = "" class="img-responsive" />

                        </div>



                    </div>
                </div>

                <div className='input__input1' >
                    <div>
                        <div className='today_d1'>
                            <p>Today deal</p>
                            <Link to='/product'>
                                <button className='today_2'>VIEW ALL</button>
                            </Link>
                        </div>
                        <div className='input__input'>

                            <Link to='./bed'>  <div className = 'Home1'><img src={main} alt = ""/>
                                <p>bed</p>
                                <p className='extra'>Extra 10% Off</p>
                            </div>
                            </Link>
                            <div className = 'Home1'><img src={main2} alt = "" />
                                <p>Table</p>
                                <p className='extra'>Extra 50-80%+Extra10% Off</p></div>
                            <div className = 'Home1'><img src={main3} alt = "" />
                                <p>Home Temple</p>
                                <p className='extra'>Upto 80%+Extra10% Off</p></div>
                            <div className = 'Home1'><img src={main4} alt = "" />
                                <p>Zebronics</p>
                                <p className='extra'>From ₹299</p></div>
                            <div className = 'Home1'><img src={main5} alt = "" />
                                <p>TDS meter</p>
                                <p className='extra'>From ₹199</p></div>
                            <div className = 'Home1'><img src={main6} alt = "" />
                                <p>Shampoo</p>
                                <p className='extra'>From ₹299+Extra10%Off</p></div>
                            <div className = 'Home1'><img src={main7} alt = "" />
                                <p>Watch</p>
                                <p className='extra'>Up to 75% Off</p></div>
                            <div className = 'Home1'><img src={main8} alt = "" />
                                <p>Shavar</p>
                                <p className='extra'>Min50%+Extra 10%off</p></div>


                        </div>
                    </div>








                </div>

                <hr></hr>

                <div className='input__input1' >
                    <div>
                        <div className='today_d1'>
                            <p>Top deal</p>
                            <Link to='/mobile'>
                                <button className='today_2'>VIEW ALL</button>
                            </Link>
                        </div>
                        <div className='input__input'>

                            <div className = 'Home1'><img src={main9} alt = "" />
                                <p>Mobile</p> 
                                <p className='extra'>Extra 10% Off</p>
                            </div>

                            <div className = 'Home1'><img src={main10} alt = ""/>
                                <p>Mobile</p>
                                <p className='extra'>Min50%+Extra 10%off</p></div>
                            <div className = 'Home1'><img src={main11} alt = "" />
                                <p>Mobile</p>
                                <p className='extra'>Upto 80%+Extra10% Off</p></div>
                            <div className = 'Home1'><img src={main12} alt = ""/>
                                <p>Mobile</p>
                                <p className='extra'>From ₹8999</p></div>
                            <div className = 'Home1'><img src={main13} alt = ""/>
                                <p>Mobile</p>
                                <p className='extra'>From ₹9999</p></div>
                            <div className = 'Home1'><img src={main14} alt = ""/>
                                <p>Mobile</p>
                                <p className='extra'>From Extra10%Off</p></div>
                            <div className = 'Home1'><img src={main15} alt = ""/>
                                <p>Mobile</p>
                                <p className='extra'>Up to 45% Off</p></div>
                            <div className = 'Home1'><img src={main16} alt = ""/>
                                <p>Mobile</p>
                                <p className='extra'>Extra 50%</p></div>


                        </div>
                    </div>








                </div>




            </div>
        </div>
    )
}
