import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from 'react-router-dom';



export default class Sign extends React.Component{
    constructor(props){
        super(props);


        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            department:"",
            name:"",
            email:"",
            password:"",
            passworded:"",
            departmentError : "",
            nameError: "",
            emailError: "",
            passwordError: "",
            dobError:""

        };
    }


    handleChangeDept = event=> {
        const deptVal= event.target.value;
        this.setState({department:deptVal});
        console.log(deptVal);
        if(isNaN(parseInt(deptVal))){
            this.setState({departmentError: "Valid Department"})
        }else{
            this.setState({departmentError: "Invalid department"})
    } 
    }

    handleChangeName = event=> {
        const nameVal= event.target.value;
        this.setState({name:nameVal});
        console.log(nameVal);
        if(isNaN(parseInt(nameVal))){
            this.setState({nameError: "Valid department"})
        }else{
            this.setState({nameError: "Invalid department"})
    }
    }

    handleChangeEmail = event=> {
        const emailVal = event.target.value;
        this.setState({email:emailVal});
        if(emailVal.includes("@")){
            this.setState({emailError: "Valid department"})
        }else{
            this.setState({emailError: "Invalid department"})
    }
    }

   

    handleChangePass = (event) =>{
        const passwordVal= event.target.value;
        this.setState({password:passwordVal});
        console.log(passwordVal);
    };


    handleChangeConPass = event => {
        const passConVal = event.target.value;
        this.setState({passworded:passConVal});
        console.log(passConVal);

        let me5 = this.state.password;

        if(passConVal !== me5){
            this.setState({passwordError: "Password not match"})
          
        }else{
            this.setState({passwordError: "Password match"});
    }  

    }
          
handleSubmit(event){
event.preventDefault();


let me = this.state.department;
let me2 = this.state.name;
let me3 = this.state.email;
let me4 = this.state.passworded;
let me5 = this.state.password;
console.log(me5);
if( me === "" && me2 === "" && me3 === "" && (me5 === "" && me4 === "" || me4 !== me5)){
    this.setState({departmentError: "*Please enter department"});
    this.setState({nameError: "*Please enter name"});
    this.setState({emailError: "*Please enter email"});
    this.setState({dobError: "*Please enter DOB"});
    this.setState({passwordError: "*Enter password"});

   
}else{
    this.props.history.push('/dashboard');
}
         
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
            
               <form onSubmit={this.handleSubmit}>
                <label className="lbl">SIGN UP</label>
                <input type="text" placeholder="Department" className="form-control" onChange={this.handleChangeDept} value={this.state.department}></input>
                <small style={{color:"orangered"}}>{this.state.departmentError}</small><br/>
                <input type="text" placeholder="Name" className="form-control" onChange={this.handleChangeName} ></input>
                <small style={{color:"orangered"}}>{this.state.nameError}</small><br/>
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.handleChangeEmail} ></input>
                <small style={{color:"orangered"}}>{this.state.emailError}</small><br/>
                <input type="date" placeholder="dd/mm/yy" className="form-control" onChange={this.handleChangeDOB} ></input>
                <small style={{color:"orangered"}}>{this.state.dobError}</small><br/>
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePass} ></input>
                <br/>
                <input type="password" placeholder="Confirm Password" className="form-control" onChange={this.handleChangeConPass} ></input>
                <small style={{color:"orangered"}}>{this.state.passwordError}</small>
          
                <br/>
                <select name="Country" className="fname form-control">
                    <option value="Canada" >Canada</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Ghana">Ghana</option>
                </select><br/>
                <input type="submit" value="Submit" className="fname1"></input>
            </form>
            
                
                
            </div>
            

            
        </div>
        </div>
        
        );
    }
}

