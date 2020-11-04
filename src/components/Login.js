import { React} from 'react';
import loginNamelogo from '../img/loginNamelogo.png';
//-------------------------------------------------

const Login = () => {

        return (
            <div className = "login-container">
                <div>   
                    <div className="login-container-logoForm">  
                        <div className = "login-img-logo">
                            <img src ={loginNamelogo} alt=""/>
                        </div> 
                        <form className="form-group">
                            <label>Usuario</label>
                            <input name="user" type="email" placeholder="email@gmail.com" required />
                            <label>Password</label>
                            <input name="password" placeholder="password" type="password" required />
                            <button onClick={()=>window.location.href = "/selecttable"}>INGRESAR</button>
                        </form>
                    </div>
                </div>   
            </div>
        )
    }


export default Login;

