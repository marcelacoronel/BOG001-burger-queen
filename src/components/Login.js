import React, { useState } from 'react';
import loginNamelogo from '../img/loginNamelogo.png';
import {useHistory} from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({
        mail:'',
        password:''
    })

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const history = useHistory();

    const sendUser = (e) =>{
        e.preventDefault();
        history.push('/PageWaiter')
        e.target.reset();
    }

    return (
        <div className = "login-container">
            <div>   
                <div className="login-container-logoForm">  
                    <div className = "login-img-logo">
                        <img src ={loginNamelogo} alt=""/>
                    </div> 
                    <form className="form-group" onSubmit={sendUser}>
                        <label>Usuario</label>
                        <input name="mail" type="email" placeholder="email@gmail.com" onChange={handleInputChange} required />
                        <label>Password</label>
                        <input name="password" placeholder="password" type="password" onChange={handleInputChange} required />
                        <button type="submit">INGRESAR</button>
                        
                    </form>
                </div>
                
            </div> 
           
        </div>
    )
}


export default Login;

