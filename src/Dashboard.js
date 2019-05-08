import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import env from './env';


class Dashboard extends React.Component{

        constructor(props){
        super(props);

        this.state = {
            showData: {name:'',
            department:'',
            age:'',
            leaveType:"",
            endDate:"",
            
           }

        }
    }

   async componentDidMount(){

        try {
            
            const getToken = localStorage.getItem("blog-token");
            const getLeave = localStorage.getItem("leave");
            const getEndDate = localStorage.getItem("endDate");

            if(!getToken) return this.props.history.push('/sign');
            const res = await axios.get(`${env.api}/teachers/profile`, 
             {
                 headers: {
                     Authorization : `Bearer ${getToken}`
                 },
               
            });
            this.setState({name:res.data.data.name, department: res.data.data.department});
            
            this.setState({endDate: getEndDate});

            if(!getLeave){
              this.setState({leaveType: "No record"});
            }else{
              this.setState({leaveType: getLeave});
            }
            
            
        
            
            } catch (error) {
            //console.log(error.response);
            this.props.history.push('/sign');
        }
        
    }




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
                        <h4>{this.state.name}'s Calendar</h4><br/><p>Statistics</p>
                            <div className="row offRem">
                            
                                    <div className="col-sm">
                                    <div className="days1">
                                        <h1 className="daysLeft">8</h1>
                                        <hr></hr>
                                        <small>21 days remaining out 1 days allowance for leave.</small>
                                    </div>
                                    </div>



                                    <div className="col-sm">
                                    <div className="days1">
                                        <h5>Used so far</h5>
                                        <hr></hr>
                                        <small>Holiday:<span style={{float: "right"}}><small>12.5</small></span></small><br/>
                                        <small>Sick Leave:<span style={{float: "right"}}><small>1 out of 12</small></span></small>
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
                                        <strong>Supervisor:<span style={{float:"right"}}>{this.state.name}</span></strong><br/>
                                        <strong>Department:<span style={{float: "right"}}>{this.state.department}</span></strong><br/>
                                        <small>Allowance in 2018:<span style={{float: "right"}}>21 days</span></small><br/>
                                        
                                    </div>
                                    </div>
                            </div>


                            <br/><br/>

                    <a href="#toggleUs" data-toggle="collapse" className="btn btn-success btn-xs">Show more</a>
                          
                        

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