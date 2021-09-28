// import { SettingsSystemDaydreamOutlined } from '@material-ui/icons'
import React from 'react'

import Ak from '../Images/AAA.jpg'
import './Login.css'


export default function Login() {

    // const history= useHistory();

    // let [email,setEmail] = useState('');
    // let [password,setPassword] = useState('');

    // const signin=(event)=>{
    //     event.preventDefault();
    //     alert(email +" "+password);
    //     auth.signInWithEmailAndPassword(email,password)
    //     .then((authResponce)=>{

    //         if(authResponce){
    //             history.push('/');
    //         }

    //     })
    //     .catch((errorresponse)=>{
    //         alert('Error');
    //        console.log(errorresponse);
    //     })

        
    // }

    // const register =(event)=>{
    //     event.preventDefault();

    //     // alert(email +" "+password);

    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then((authResponce)=>{
    //         if(authResponce){
    //             history.push('/');
    //         }
    //     })
    //     .catch((errorresponse)=>{
    //         alert('Error');
    //        console.log(errorresponse);

    //     })

      
    // }


   

  


    return (
        <div>
        <div className = 'LoL'>
        <img src={Ak} alt = ""/>
            <div className = 'InI'>
            <div className = 'In'>
                <input type = 'text' placeholder = 'Enter Mail or Mobile Number' />
            </div>
            
             <div className = 'In1'>
              <input type = 'password'/>
              
              <p className='account__text'>By continuing, you agree to Term's <p className = "AAA">Conditions of Use</p> and <p className = "AAA">Privacy Notice</p></p>
              <button className='B_L'> Login</button>
              <p>OR</p>
              <p><a href = "http://localhost:3000/" >New to Flipkart ? Create New</a></p>
              <button className='B__1 '>Create Account</button>
             </div>
        </div>
        </div>
      </div>


    )
}
