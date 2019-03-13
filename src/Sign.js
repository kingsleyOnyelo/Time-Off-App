import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'



export default class Sign extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            department : null,
            name: null,
            email: null,
            password: null,
            formErros : {
                name: "",
                email: "",
                password: ""
            }

        };
    }


    handleChange(event){
        let deptVal= event.target.value;
        this.setState({department: deptVal});

        console.log(this.state.department);
    
            
    }



    
handleSubmit = ()=> {
    
}
    render(){
        return (
            <div>
        <div className="signDiv1">
            

            <div className="signCon2">
            
            <form onSubmit={this.handleSubmit} noValidate>
                <label className="lbl">SIGN UP</label>
                <input type="text" placeholder="Department" className="form-control" onChange={this.handleChange} noValidate></input>
                <small style={{color:"red"}}>Department required*</small>
                <input type="text" placeholder="Name" className="form-control" onChange={this.handleChangeName} noValidate></input>
                <small style={{color:"red"}}>Name required*</small>
                <input type="email" placeholder="Email Address" className="form-control" onChange={this.handleChangeEmail} noValidate></input>
                <small style={{color:"red"}}>Email required*</small>
                <input placeholder="dd/mm/yy" className="form-control" onChange={this.handleChangeDOB} noValidate></input>
                <small style={{color:"red"}}>DOB required*</small>
                <input type="password" placeholder="Password" className="form-control" onChange={this.handleChangePass} noValidate></input><br/>
                <input type="password" placeholder="Confirm Password" className="form-control" onChange={this.handleChangePass2} noValidate></input><br/>
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

