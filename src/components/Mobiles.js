import React from 'react'
import Product from './Product'
import './mobile.css'
import AA from '../Images/m1.jpeg'
import AB from '../Images/m2.jpeg'
import AC from '../Images/m4.jpeg'
import AD from '../Images/m5.jpeg'
import AE from '../Images/m6.jpeg'
import AF from '../Images/m7.jpeg'
import AG from '../Images/m8.jpeg'
import AH from '../Images/m3.jpeg'


export default function Mobiles() {
    return (
        <div className = 'Mobile__1'>
            <h3 className = 'HH'>Today Offer</h3>
            <hr></hr>
            <div className = 'Mobile__Main1'>
            <div className='main__1'><Product img = {AA} Title = 'SAMSUNG Galaxy A21s(Black,64GB)' Model = '48MP Quad Cam' Price = 'Now 17999' Rating = '4.3'/></div>
            <div  className='main__1'><Product img = {AB} Title = 'Oppo A29 2020' Model = 'all deals' Price = 'Now 51999' Rating = '3.2' /></div>
            <div  className='main__1'><Product img = {AC} Title = 'SAMSUNG Galaxy A51' Model = '6\821' Price = 'Now 7999'Rating = '4.3' /></div>
            <div  className='main__1'><Product img = {AD} Title = 'Poco m2 pro' Model = '48MP Quad Cam' Price = 'Now 50999' Rating = '4.5'/></div>
        </div>
        <div className = 'Mobile__Main2'>
        <div className='main__1'><Product img = {AE} Title = 'Vivo X50 Pro(8GB +256GB)' Model = 'Alpha Grey' Price = 'Now 51999'Rating = '4.2' /></div>
        <div className='main__1'><Product img = {AF} Title = 'SAMSUNG Galaxy M02' Model = 'Blue,3gb RAM' Price = 'Now 7999'Rating = '5.0' /></div>
        <div className='main__1'><Product img = {AG} Title = 'SAMSUNG Galaxy A21s' Model = '48MP Quad Cam' Price = 'Now 17999' Rating = '4.0'/></div>
        <div className='main__1'><Product img = {AH} Title = 'SAMSUNG Galaxy M11' Model = '50MP  Cam' Price = 'Now 17999' Rating = '3.2'/></div>
        </div>
        </div>
    )
}
