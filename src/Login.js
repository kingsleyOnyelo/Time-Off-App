import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'


class Login extends React.Component{
    render(){
        return(
            <div>
                <div className="signDiv1">
                <div className="signCon2">
            
            <form>
               
                <label className="lbl">ENTER DASHBOARD</label>
               
                <input type="email" placeholder="Email Address" className="form-control"></input>
                <small style={{color:"red"}}>Email required*</small>
              
                <input type="password" placeholder="Password" className="form-control"></input>
                <small style={{color:"red"}}>Password required*</small><br/>
              
                
                <input type="button" value="Login" className="fname1"></input>
            </form>
            
            </div>
                
            </div>
            </div>
        )
    }
}

export default Login;