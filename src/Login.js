import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import env from './env';



class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);




        this.state = {
            email: "",
            password:"",
          };
    };

    

    


     handleChangeEmail(event){
        let emailVal= event.target.value;
        this.setState({email: emailVal});
        const emailState = this.state.email;
        //console.log(emailState);
        if(emailState.includes("@")){
            this.setState({emailError: "Valid Email"})
        }else{
            this.setState({emailError: "Invalid Email"})
    }
    };


    handleChangePassword(event){
        let passwordVal= event.target.value;
        this.setState({password: passwordVal});
        if(passwordVal.length > 0){
            this.setState({passwordError: ""})
        }else{
            this.setState({passwordError: "Invalid password"})
    }
    }

   async handleSubmit(event){
        event.preventDefault();
          try {
                    const res = await axios.post(`${env.api}/teachers/login`, this.state);
                    const token = res.data.data.token;

                    localStorage.setItem("blog-token", token);
                    this.props.history.push("/dashboard");
                     } catch (error) {
                        console.log(error.response);
                    this.props.history.push('/sign');
                }  
            
}







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
            
            <form onSubmit={this.handleSubmit}>
               
                <label className="lbl">ENTER DASHBOARD</label>
               
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.handleChangeEmail} />
                <small style={{color:"orangered"}}>{this.state.emailError}</small><br/>
              
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePassword} />
                <small style={{color:"orangered"}}>{this.state.passwordError}</small><br/>
                <input type="submit" value="Login" className="fname1"/>
            </form>
            
                
            </div>
            </div>
            
           
            </div>

           
        )
    }
}

export default Login;