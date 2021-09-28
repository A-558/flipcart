import './PayMent.css'
import React from 'react'

export default function payMent() {
    return (
        <div>
               <div className="carthead container">
            <div className="payment__info">
            <div className='Ak'>
            <h3>Select a delivary address</h3>
                    <input type="radio" name="radio" />

                    <span><b>Akhil kumar</b></span><br />
                    <span>Rajendra nagar,</span><br />
                    <span>Saddal gundu,</span><br />
                    <span>Mahabubnagar-509001</span><br />

                    <button type="button" class="btn btn-warning" >Delivar to this address</button>
                </div>
                <div className='ak1'>
                  
                <input type="radio" name="radio" />
                   
                    <span><b>Chandrakanth Miryala</b></span><br />
                    <span>krishna nagar,</span><br />
                   
                    <span>Bhageertha Colony,</span><br />
                    <span>Mahabubnagar-509001</span><br />

 
                    <button type="button" class="btn btn-warning" >Delivar to this address</button>
                </div>
                <div className='ak2'>
                  
                  <input type="radio" name="radio" />
                     
                      <span><b>Raghavendar</b></span><br />
                      <span>Kulakcharla</span><br />
                     
                      <span>Parigi</span><br />
                      <span>Vikarabad</span><br />
  
   
                      <button type="button" class="btn btn-warning" >Delivar to this address</button>
                  </div>
             
            </div>

            <div className="payment__info1">
                <h3>Choose your payment method</h3>

                <input type="radio" name="radio" />
                <b><label for="defaultRadio">UPI Payments</label></b><br></br>

                <input type="radio" name="radio" />
                <b><label for="defaultRadio">Net Banking</label></b><br></br>
                <input type="radio" name="radio" />
                <b><label for="defaultRadio">Credit/Debit cards</label></b><br></br>
                <input type="radio" name="radio" />
                <label for="defaultRadio"><b>Pay On Delivary</b><p>Pay digitally with SMS pay link|
                    <p>Cash may not be accepted in COVID restricted areas</p></p></label>



            </div>



        </div>
    )
        </div>
    )
}
