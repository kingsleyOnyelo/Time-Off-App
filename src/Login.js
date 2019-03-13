import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';



class Login extends React.Component{
    render(){
        return(
           
            <div>
                <nav className="navBar">
                                <Link to="/"><div className="spn"><h3 className="logo">TimeOff App</h3></div></Link>
                                    <div className="signUp">
                                    <Link to="/login"><input type="button" className="btn btn1" value="Login"></input></Link>
                                    <Link to="/sign"><input type="button" className="btn btn2" value="Sign Up"></input></Link>
                                    </div>
                </nav>
                
                <div className="signDiv1">
                <div className="signCon2">
            
            <form>
               
                <label className="lbl">ENTER DASHBOARD</label>
               
                <input type="email" placeholder="Email Address" className="form-control"></input>
                <small style={{color:"red"}}>Email required*</small>
              
                <input type="password" placeholder="Password" className="form-control"></input>
                <small style={{color:"red"}}>Password required*</small><br/>
                <Link to="/dashboard"><input type="button" value="Login" className="fname1"></input></Link>
            </form>
            
                
            </div>
            </div>
            
           
            </div>

           
        )
    }
}

export default Login;