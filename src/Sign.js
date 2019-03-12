import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'



export default class Sign extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        signup : "SIGN UP",
        dept:"",
        name: "",

    };

    handleChange(event){
       const deptVal = event.target.value;
       this.setState({dept: deptVal});
    }

    handleClick(){
        
            if(this.state.signup = "WELCOME")
        this.setState({signup: this.state.signup = "WELCOME"});
        if(this.state.dept === ""){
        this.setState({dept: this.state.dept = alert("please enter a Department")});
        }else{
            this.setState({dept: alert( ` Okay ${this.state.dept}`)});
        }


        if(this.state.name === ""){
            this.setState({name: this.state.name = alert("please enter a name")});
            }else{
                this.setState({name: this.state.name = this.state.name});
            }
    }

    render(){
        return (
            <div>
        <div className="signDiv1">
            

            <div className="signCon2">
            
            <form>
                <label className="lbl">SIGN UP</label>
                <input type="text" placeholder="Department" className="form-control" onChange={this.handleChange}></input><br/>
                <input type="text" placeholder="Name" className="form-control"></input><br/>
                <input type="email" placeholder="Email Address" className="form-control" required></input><br/>
                <input placeholder="dd/mm/yy" className="form-control" required></input><br/>
                <input type="password" placeholder="Password" className="form-control" required></input><br/>
                <input type="password" placeholder="Confirm Password" className="form-control" required></input><br/>
                <select name="Country" className="fname form-control">
                    <option value="Canada" >Canada</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Ghana">Ghana</option>
                </select><br/>
                <input type="button" value="Submit" className="fname1" onClick={this.handleClick}></input>
            </form>
            
                
                
            </div>
            

            <div className="signCon3">
            
            <form>
                <p style={{color:"white"}}>Login to view dashboard if you've already signed up</p>
                <label className="lbl">ENTER DASHBOARD</label>
               
                <input type="email" placeholder="Email Address" className="form-control" required></input><br/>
              
                <input type="password" placeholder="Password" className="form-control" required></input><br/>
              
                
                <input type="button" value="Submit" className="fname1"></input>
            </form>
            
                
                
            </div>
        </div>
        </div>
        
        );
    }
}

