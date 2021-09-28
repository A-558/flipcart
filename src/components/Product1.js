import React from 'react'
import Product from './Product';
import Ak from '../Images/t1.jpeg'
import Al from '../Images/t2.jpeg'
import Am from '../Images/t3.jpeg'
import An from '../Images/t4.jpeg'
import Ao from '../Images/t5.jpeg'
import Ap from '../Images/t6.jpeg'
import Ar from '../Images/t7.jpeg'
import Aq from '../Images/t8.jpeg'
import './Product.css'





function Product1() {
    return (
        <div className='prod'>
            <div className='prod1'>

                <div className='main'>

                    <div className='main__A'>

                        <div className='main__1'><Product img={Ak} Title='Table' Model='Bean Bag Cover' Price='1,000' Rating = '4.5' /> </div>
                        <div className='main__1'> <Product img={Al} Title='Chair' Model=' Chairs' Price='3,290'  Rating = '3.5' /> </div>
                        <div className='main__1'><Product img={Am} Title='Chair' Model='simple Chairs' Price='Min 50% Off'  Rating = '3.5'/></div>
                        <div className='main__1'><Product img={An} Title='Table' Model='Furniture Accessories' Price='Upto 78% Off'  Rating = '2.5'/> </div>

                    </div>
                    <div className='main__AA'>
                        <div className='main__1'><Product img={Ao} Title='Table' Model='Bookshelves' Price='299'  Rating = '4.5'/> </div>
                        <div className='main__1'><Product img={Ap} Title='Table' Model='chair' Price='299' Rating = '3.5' /> </div>
                        <div className='main__1'><Product img={Ar} Title='Table' Model='Tv Units' Price='2,200'  Rating = '2.5'/> </div>
                        <div className='main__1'><Product img={Aq} Title='Tank' Model='Acqvarium Tank' Price='5,200'  Rating = '3.5'/> </div>

                    </div>

                </div>

            </div>




        </div>


    )
}
export default Product1;