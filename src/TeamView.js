import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import env from './env';


class TeamView extends React.Component{
  constructor(props){
    super(props);
  this.state = {
    showData: {name:'',
    department:'',
    age:'',
    leaveType:"",
    endDate:"",
    startDate:""
    
   }

}
}

async componentDidMount(){

try {
    
    const getToken = localStorage.getItem("blog-token");
    const getLeave = localStorage.getItem("leave");
    const getEndDate = localStorage.getItem("endDate");
    const getStartDate = localStorage.getItem("startDate")

    if(!getToken) return this.props.history.push('/sign');
    const res = await axios.get(`${env.api}/teachers/profile`, 
     {
         headers: {
             Authorization : `Bearer ${getToken}`
         },
       
    });
    this.setState({name:res.data.data.name, department: res.data.data.department});
    
    this.setState({endDate: getEndDate});
    this.setState({leaveType: getLeave});
    this.setState({startDate: getStartDate});
    

    
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
                                  </div>
                                    <div className="signUp">
                                         <Link to="/dashboard"><input type="button" className="btn btn1" value="Dashboard"></input></Link>
                                    </div>
                    </nav>


                    <div className="signDiv2">


                    
                    <div className="container-fluid">
                    <h4>All Absences</h4>
<div className="row offRem">
                            
                                    <div className="col">
            
              
  <table className="table">
    <thead>
      <tr>
        <th>Employee</th>
        <th>Department</th>
        <th>Date of request</th>
        <th>Leave dates</th>
        <th>Type</th>
        <th>Days</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{this.state.name}</td>
        <td>{this.state.department}</td>
        <td>{this.state.endDate}</td>
        <td>From {this.state.startDate} To {this.state.endDate}</td>
        <td>{this.state.leaveType}</td>
        <td>0</td>
        <td><input type="button" className="btn-danger" value="reject"/></td>
        <td><input type="button" className="btn-primary" value="approved"/></td>
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

export default TeamView;