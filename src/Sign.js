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
        this.handleChangePass2 = this.handleChangePass2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            department :"",
            name:"",
            email: "",
            password:"",
            password2:"",
            departmentError : "",
            nameError: "",
            emailError: "",
            passwordError: "",
            dobError:""

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
        this.setState({password: passwordVal});
        const passwordState = this.state.password;
       if(passwordState.length < 0){
            this.setState({passwordError: "Enter Password"})
        }else{
            this.setState({passwordError: ""})
    } 
    }


    handleChangePass2(event){
        let password2Val= event.target.value;
        this.setState({password2: password2Val});
        const password2State = this.state.password2;
       if(password2State.length < 0){
            this.setState({passwordError: "Enter Password"})
        }else{
            this.setState({passwordError: ""})
    } 
    }
  



    
handleSubmit(event){
event.preventDefault();


let me = this.state.department;
let me2 = this.state.name;
let me3 = this.state.email;
let me4 = this.state.password;
let me5 = this.state.password2;
if( me === "" && me2 === "" && me3 === "" && me4.length !== me5.length || me4 === ""){
    this.setState({departmentError: "*Please enter department"});
    this.setState({nameError: "*Please enter name"});
    this.setState({emailError: "*Please enter email"});
    this.setState({dobError: "*Please enter DOB"});
    this.setState({passwordError: "*Please enter password"});
   
}else{
    this.props.history.push('/login');
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
                <input type="text" placeholder="Department" className="form-control" onChange={this.handleChange} ></input>
                <small style={{color:"white"}}>{this.state.departmentError}</small><br/>
                <input type="text" placeholder="Name" className="form-control" onChange={this.handleChangeName} ></input>
                <small style={{color:"white"}}>{this.state.nameError}</small><br/>
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.handleChangeEmail} ></input>
                <small style={{color:"white"}}>{this.state.emailError}</small><br/>
                <input placeholder="dd/mm/yy" className="form-control" onChange={this.handleChangeDOB} ></input>
                <small style={{color:"white"}}>{this.state.dobError}</small><br/>
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePass} ></input>
                <small style={{color:"white"}}>{this.state.passwordError}</small><br/>
                <input type="password" placeholder="Confirm Password" className="form-control" onChange={this.handleChangePass2} ></input>
                <small style={{color:"white"}}></small>
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

