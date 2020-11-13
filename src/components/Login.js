import React, { useState } from 'react';
import loginNamelogo from '../img/imgNameLogo.png';
import {useHistory} from 'react-router-dom';
import imgLoginBurger from '../img/imgLoginBurger.png';
import Footer from './Footer';

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
        let userLogin= user.mail;
        localStorage.setItem('activeUser',JSON.stringify(userLogin));

        if (userLogin === "mesero@gmail.com"){
            history.push('/pageWaiter')
        }
        else if (userLogin === "chef@gmail.com") {
            history.push('/pageChef')
        }
        else {
            localStorage.clear('activeUser')
            history.push('/');
        }
            

        e.target.reset();
    }

    return (
        <React.Fragment>
            <div className = "login-container">
                <div>   
                    <div className="login-container-logoForm">
                        <div className ="login-img-burger">
                        <img src ={imgLoginBurger} alt=""/>
                        </div>
                        <div className = "login-imgName-logo">
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
            <Footer/>
        </React.Fragment>
    )
    
}


export default Login;

