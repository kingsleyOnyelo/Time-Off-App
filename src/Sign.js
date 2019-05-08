import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import env from './env';
import axios from 'axios';
import {Link} from 'react-router-dom';



export default class Sign extends React.Component{
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.isFormValid = this.isFormValid.bind(this);

        this.state = {
            department:"",
            name:"",
            email:"",
            password:"",
          

        };
    }

 onChange(e){
        this.setState({[e.target.name]: e.target.value});


     /*    let emailVal= e.target.value;
        this.setState({email: emailVal});
        const emailState = this.state.email;
        //console.log(emailState);
        if(emailState.includes("@")){
            this.setState({emailError: "Valid Email"})
        }else{
            this.setState({emailError: "Invalid Email"})
    } */



    let deptVal= e.target.value;
    this.setState({department: deptVal});
    const deptState = this.state.department;
   
    if(isNaN(deptState)){
        this.setState({deptError: "Good one!"})
    }else{
        this.setState({deptError: "Enter valid department!"})
}


/* 
let nameVal= e.target.value;
this.setState({name: nameVal});
const nameState = this.state.name;

if(isNaN(nameState)){
    this.setState({nameError: "Nice name!"})
}else{
    this.setState({nameError: "Enter valid name!"})
} */
    };
  

    isFormValid(){
        const required = ['name', 'department', 'email', 'password'];
        let emptyField = 0;

        required.forEach(field =>{
            if(this.state[field] === '') ++emptyField;
         });

         return emptyField > 0 ? true: false;
    }

async submitForm(){

        try {
            const res = await axios.post(`${env.api}/teachers`, this.state);
            //console.log(res.data);
            const token = res.data.data.token;
            //console.log(token);
            localStorage.setItem("blog-token", token);
            this.props.history.push("/dashboard");
            
        } catch (error) {
            console.log("there was an error", error.response);
            
        }
         
     }

    
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
            
               <div>
                <label className="lbl">SIGN UP</label>
                <input type="text" name="department" placeholder="Department" className="form-control" onChange={this.onChange}/>
                <small style={{color:"orangered"}}>{this.state.deptError}</small><br/>
               
                <input type="text" name="name" placeholder="Name" className="form-control" onChange= {this.onChange}/>
                <small style={{color:"orangered"}}>{this.state.nameError}</small><br/>
                
                <input type="text" name="email" placeholder="Email Address" className="form-control" onChange= {this.onChange}/>
                <small style={{color:"orangered"}}>{this.state.emailError}</small><br/>
           
                <input type="number"name="age" placeholder="Age" className="form-control" onChange= {this.onChange}/><br/>
              
                <input type="password" name="password" placeholder="Password" className="form-control" onChange={this.onChange} />
  
            
          
                <br/>
                <select name="Country" className="fname form-control">
                    <option value="Canada" >Canada</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Ghana">Ghana</option>
                </select><br/>
                <input type="submit" value="Submit" className="fname1" onClick={this.submitForm} disabled = {this.isFormValid()}/>
            </div>
            
                
                
            </div>
            

            
        </div>
        </div>
        
        );
    }
}

