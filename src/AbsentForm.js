import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


class AbsentForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            duration:"",
            val: "date",
            val2: "date",
            txtArea:"",
            txtAreaError:"",
            leaveType:""
        
        }
    }

    handleChange = event => {
        console.log(event.target.value);
        this.setState({val: event.target.value});
    }

    handleChange2 = event => {
        console.log(event.target.value);
        this.setState({val2: event.target.value});
    }

    handleChangetxt = event =>{
        this.setState({txtArea: event.target.value});
    }

    handleClick = (event)=>{
        event.preventDefault();
        let inp = this.state.val;
        let inp2 = this.state.val2;
        localStorage.setItem("endDate", inp2);
        localStorage.setItem("startDate", inp);
        localStorage.setItem("leave", this.state.leaveType);
        //console.log(inp.length);
      let vl = null;
      let vl2 = null;
      let diff = null;
        for(let i = 0; i <inp.length; i++){
            let pair = `${inp[8]}${inp[9]}`;
            let fn = parseInt(pair);
            vl = fn;
            console.log(vl);
        }

        for(let i = 0; i <inp2.length; i++){
            let pair = `${inp2[8]}${inp2[9]}`;
            let fn = parseInt(pair);
            vl2 = fn;
            console.log(vl2);
            
        }
         diff = vl2 - vl;
         console.log(diff);
         localStorage.setItem("dateValue", diff);
         if(diff === -1 || NaN){
            diff = "wrong";
            localStorage.removeItem("dateValue");
         }
         
        
         let dayType;
         diff === 1 ? dayType = "day": dayType = "days";

        this.setState({duration: `${diff} ${dayType}`});

        if(this.state.txtArea === "")
        this.setState({txtAreaError: "Please enter a value"})
}
        


handleLeave = (e)=>{
    this.setState({leaveType: e.target.value});
    
}
      
        






    render(){

      

        return (
            <div>
                 <nav className="navBar">
                                <Link to="/"><div className="spn"><h3 className="logo">TimeOff App</h3></div></Link>
                                {/* <div className="absent">
                                <Link to="/absentform"><ul className="leave">
                                    <li className="listAb">Leave Form</li>
                                  </ul></Link>
                                </div> */}
                                    <div className="signUp">
                                    
                                    <Link to="/dashboard"><input type="button" className="btn btn1" value="Dashboard"></input></Link>
                                    
                                    </div>
                    </nav>

                    <div className="signDiv2">
                    <div className="container-fluid"><br/><br/>
                    <div className="formDiv">
                    <form>
                            <select name="Country" className="form-control col-sm" onChange = {this.handleLeave}>
                                <option value="Type of Leave">Type of Leave</option>
                                <option value="Holiday">Holiday</option>
                                <option value="Maternity">Maternity</option>
                                <option value="Paternity Leave">Paternity Leave</option>
                                <option value="Sick Leave">Sick Leave</option>
                            </select>
                            
                            <label>From</label>
                            <label className="lbl4">To</label><br/>
                            <input type={this.state.val} className="col-sm-6" onChange={this.handleChange}></input>
                            
                            <input type={this.state.val2} className="col-sm-6" onChange={this.handleChange2}></input><br/><br/>
                            <input type="text" placeholder="duration" value={this.state.duration}></input><br/><br/>
                            <textarea rows="4" cols="50" className="col-sm" onChange={this.handleChangetxt}>

                            </textarea><br/>
                            <small style={{color:"orangered"}}>{this.state.txtAreaError}</small><br/><br/>
                            <input type="button" value="Submit" className="fname1" onClick={this.handleClick}></input>

                        
                    </form> 
                    </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default AbsentForm;