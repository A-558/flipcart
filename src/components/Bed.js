import React from 'react'
import Product from './Bedd'
import BA from '../Images/b1.jpeg'
import BB from '../Images/b2.jpeg'
import BC from '../Images/b3.jpeg'
import BD from '../Images/b4.jpeg'
import BE from '../Images/b5.jpeg'
import BF from '../Images/b6.jpeg'
import BG from '../Images/b7.jpeg'
import BH from '../Images/b8.jpeg'
import './Bedd.css'

export default function Bed() {
    return (
        <div>
            <div className = 'mai'>

                <div className = 'main__0'> <Product img = {BA} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet ' Model = ' (Pack of 1, Multicolor)' Price = '259' Rating = '3.8'/></div>
                <div className = 'main__0'> <Product img = {BB} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet ' Model = '(Pack of 1, Multicolor)' Price = '259' Rating = '9.4'/></div>
                <div className = 'main__0'> <Product img = {BC} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet' Model = '(Pack of 1, Multicolor)' Price = '259'Rating = '9.4'/></div>
                <div className = 'main__0'> <Product img = {BD} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet' Model = '(Pack of 1, Multicolor)' Price = '259'Rating = '9.4'/></div>

            </div>
            <div className = 'mai_1'>
            <div className = 'main__0'> <Product img = {BE} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet' Model = '(Pack of 1, Multicolor)' Price = '259' Rating = '8.8'/></div>
            <div className = 'main__0'> <Product img = {BF} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet' Model = '(Pack of 1, Multicolor)' Price = '259' Rating = '8.8'/></div>
            <div className = 'main__0'> <Product img = {BG} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet' Model = '(Pack of 1, Multicolor)' Price = '259' Rating = '8.8'/></div>
            <div className = 'main__0'> <Product img = {BH} Title = 'CHHAVI INDIA 120 TC Microfiber Double 3D Printed Bedsheet' Model = '(Pack of 1, Multicolor)' Price = '259' Rating = '8.8'/></div>
            </div>
        </div>
    )
}
