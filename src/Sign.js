import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';



export default class Sign extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            department : null,
            name: null,
            email: "",
            password: null,
            password2:"",
            departmentError : "*Department required",
            nameError: "*Name required",
            emailError: "*Email required",
            passwordError: ""

        };
    }


    handleChange(event){
        let deptVal= event.target.value;
        this.setState({department: deptVal});
        const deptState = this.state.department;
        //console.log(deptState);
        if(isNaN(parseInt(deptState))){
            this.setState({departmentError: "Valid Department"})
        }else{
            this.setState({departmentError: "Invalid department"})
    }
    };


    handleChangeName(event){
        let nameVal= event.target.value;
        this.setState({name: nameVal});
        const nameState = this.state.name;
        //console.log(nameState);
        if(isNaN(parseInt(nameState))){
            this.setState({nameError: "Valid department"})
        }else{
            this.setState({nameError: "Invalid department"})
    }
    };


    handleChangeEmail(event){
        let emailVal= event.target.value;
        this.setState({email: emailVal});
        const emailState = this.state.email;
        //console.log(emailState);
        if(emailState.includes("@")){
            this.setState({emailError: "Valid department"})
        }else{
            this.setState({emailError: "Invalid department"})
    }
    };

    handleChangePass(event){
        let passwordVal= event.target.value;
        //let password2Val= event.target.value;
        this.setState({password: passwordVal});
        //this.setState({password2: password2Val});
        const passwordState = this.state.password;
        //const password2State = this.state.password2;
        console.log(passwordState);
      //  console.log(password2State);
       if(passwordState){
            this.setState({passwordError: "Password match"})
        }else{
            this.setState({passwordError: "Password not match"})
    } 
    }
  



    
handleSubmit(event){

         
};

    
    render(){
        return (
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
            
            <form onSubmit={this.handleSubmit} noValidate>
                <label className="lbl">SIGN UP</label>
                <input type="text" placeholder="Department" className="form-control" onChange={this.handleChange} noValidate></input>
                <small style={{color:"red"}}>{this.state.departmentError}</small>
                <input type="text" placeholder="Name" className="form-control" onChange={this.handleChangeName} noValidate></input>
                <small style={{color:"red"}}>{this.state.nameError}</small>
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.handleChangeEmail} noValidate></input>
                <small style={{color:"red"}}>{this.state.emailError}</small>
                <input placeholder="dd/mm/yy" className="form-control" onChange={this.handleChangeDOB} noValidate></input>
                <small style={{color:"red"}}>DOB required*</small>
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePass} noValidate></input><br/>
                <input type="password" placeholder="Confirm Password" className="form-control" onChange={this.handleChangePass} noValidate></input>
                <small style={{color:"red"}}>{this.state.passwordError}</small>
                <br/>
                <select name="Country" className="fname form-control">
                    <option value="Canada" >Canada</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Ghana">Ghana</option>
                </select><br/>
                <input type="submit" value="Submit" className="fname1" onClick={this.handleClick}></input>
            </form>
            
                
                
            </div>
            

            
        </div>
        </div>
        
        );
    }
}

