import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';



class Login extends React.Component{
    constructor(props){
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);




        this.state = {
            email: "",
            password:"",
            emailError: "",
            passwordError: "",
           

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
        const passwordState = this.state.password;
        //console.log(emailState);
        if(passwordState.length > 0){
            this.setState({passwordError: ""})
        }else{
            this.setState({passwordError: "Invalid password"})
    }
    }

    handleSubmit(event){
        event.preventDefault();
            if(this.state.email === "" || this.state.password === ""){
                this.setState({emailError: "*Please enter email"});
                this.setState({passwordError: "Enter password"});
                console.log(this.state.password.length);
            }else{
                this.props.history.push('/dashboard');
                console.log(this.state.password.length);
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
               
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.handleChangeEmail} ></input>
                <small style={{color:"white"}}>{this.state.emailError}</small><br/>
              
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePassword}></input>
                <small style={{color:"white"}}>{this.state.passwordError}</small><br/>
                <input type="submit" value="Login" className="fname1"></input>
            </form>
            
                
            </div>
            </div>
            
           
            </div>

           
        )
    }
}

export default Login;