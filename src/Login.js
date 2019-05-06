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
            emailError: "",
            passwordError: "",
           

        };
    };



    async componentDidMount(){

        try {
            const getToken = localStorage.getItem("blog-token");

            if(!getToken) return this.props.history.push('/sign');
            const res = await axios.get(`${env.api}/teachers/profile`, 
             {
                 headers: {
                     Authorization : `Bearer ${getToken}`
                 },
               
            });
            
            if(this.state.email === res.data.data.email && this.state.password === res.data.data.password)
            this.props.history.push("/dashboard");
    
        } catch (error) {
            //console.log(error.response);
            this.props.history.push('/sign');
        }  
    }




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

    handleSubmit(event){
        event.preventDefault();
            if(this.state.email === "" || this.state.password === ""){
                this.setState({emailError: "*Please enter email"});
                this.setState({passwordError: "Enter password"});
            }else{
                this.props.history.push('/dashboard');
                
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
                <small style={{color:"orangered"}}>{this.state.emailError}</small><br/>
              
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePassword}></input>
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