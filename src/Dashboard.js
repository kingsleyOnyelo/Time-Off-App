import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import env from './env';
import Calendar from 'react-calendar';
//import moment from 'moment';


class Dashboard extends React.Component{

        constructor(props){
        super(props);

        this.state = {
            name:'',
            department:'',
            age:'',
            leaveType:"",
            endDate:"",
            dateDiff:"",
            date: new Date(2017, 0, 1),
            day:""
}
        }

   async componentDidMount(){

        try {
            
            const getToken = localStorage.getItem("blog-token");
            const getLeave = localStorage.getItem("leave");
            const getEndDate = localStorage.getItem("endDate");
            const getdDateDiff = localStorage.getItem("dateValue");

            if(!getToken) return this.props.history.push('/sign');
            const res = await axios.get(`${env.api}/teachers/profile`, 
             {
                 headers: {
                     Authorization : `Bearer ${getToken}`
                 },
               
            });

            
            this.setState({name:res.data.data.name, department: res.data.data.department});
            this.setState({dateDiff:getdDateDiff});
            if(!getEndDate){
              this.setState({endDate: "No record"});
            }else{
              this.setState({endDate: getEndDate});
            }
            

            if(!getLeave){
              this.setState({leaveType: "No record"});
            }else{
              this.setState({leaveType: getLeave});
            }
            
            const dayArray = [0,1,2,3,4,5,6,7,8,9,10,11];

            for(let i = 0; i< dayArray.length; i++){
              //console.log(dayArray[i]);
              if(new Date().getHours() === dayArray[i] ){
                
                this.setState({day: "Good afternoon! "});
                break;
              }else{
                
                this.setState({day: "Good morning! "});
              }
            }

           
            
            
        
            
            } catch (error) {
            //console.log(error.response);
            this.props.history.push('/sign');
        }
        
    }

Onchange = date =>{
  this.setState({date: date});
  console.log(this.state.date);
};



    render(){
        return (
            <div>
                    <nav className="navBar">
                                <Link to="/"><div className="spn"><h3 className="logo">TimeOff App</h3></div></Link>
                                <div className="absent">
                                <Link to="/absentform"><ul className="leave">
                                    <li className="listAb">Leave Form</li>
                                  </ul></Link>

                                  <Link to="/teamview"><ul className="leave2">
                                    <li className="listAb">Team View</li>
                                  </ul></Link>
                                </div>
                                    <div className="signUp">
                                    
                                    <Link to="/login"><input type="button" className="btn btn1" value="Log out"></input></Link>
                                    
                                    </div>
                    </nav>

                    <div className="signDiv2">
                        <div className="container-fluid">
                        <br/>
                        <h4>{this.state.day}{this.state.name}</h4><br/><p>Statistics</p>
                            <div className="row offRem">
                            
                                    <div className="col-sm">
                                    <div className="days1">
                                        <h1 className="daysLeft">8</h1>
                                        <hr></hr>
                                        <small><span style={{color:"green"}}>{this.state.dateDiff}</span> days remaining for leave.</small>
                                    </div>
                                    </div>



                                    <div className="col-sm">
                                    <div className="days1">
                                        <h5>Used so far</h5>
                                        <hr></hr>
                                        <small>{this.state.leaveType}:<span style={{float: "right"}}><small>1 out of <span style={{color:"green"}}>{this.state.dateDiff}</span></small></span></small>
                                    </div>
                                    </div>


                                    <div className="col-sm">
                                    <div className="days1">
                                        <h5>Avalaible Types</h5>
                                        <hr></hr>
                                        <small>Holiday.</small><br/>
                                        <small>Maternity.</small><br/>
                                        <small>Paternity Leave.</small><br/>
                                        <small>Sick Leave (up to 10 days).</small>
                                    </div>
                                    </div>


                                    <div className="col-sm">
                                    <div className="days1">
                                        <h5>Details</h5>
                                        <hr></hr>
                                        <strong>Supervisor:<span style={{float:"right",color:"green"}}>{this.state.name}</span></strong><br/>
                                        <strong>Department:<span style={{float: "right", color:"green"}}>{this.state.department}</span></strong><br/>
                                        <small>Allowance in 2018:<span style={{float: "right"}}><span style={{color:"green"}}>{this.state.dateDiff}</span> days</span></small><br/>
                                        
                                    </div>
                                    </div>
                            </div>


                            <br/><br/>

                     <div>
                     <a href="#toggleUs" data-toggle="collapse" className="btn btn-success btn-xs">Monitor your leave</a>
                   
                      <Calendar
                        activeStartDate={this.onChange}
                        value={this.state.date}
                        //onClicYear = {this.onClickYear}
                      />
                    </div>     
                        

                            <br/><br/>



<h4>All Absences</h4>
  <div className="row offRem">
  <div className="col">
            
              
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th>Type</th>
                                        <th>End Date</th>
                                        <th>Approved by</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td style = {{color: "orange"}}>{this.state.leaveType}</td>
                                        <td style = {{color: "orange"}}>{this.state.endDate}</td>
                                        <td>Kingsley Onyelo</td>
                                        <td>Approved</td>
                                      </tr>
                                  </tbody>
                                  </table>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Dashboard;