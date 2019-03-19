import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


class TeamView extends React.Component{


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
        <td>Lysa</td>
        <td>Warehouse</td>
        <td>2018/06/12</td>
        <td>From 2018/06/12 To 2018/07/30</td>
        <td>Paternity Leave</td>
        <td>0</td>
        <td><input type="button" className="btn-danger" value="reject"/></td>
        <td><input type="button" className="btn-primary" value="approved"/></td>
      </tr>
      <tr>
        <td>Lysa</td>
        <td>Warehouse</td>
        <td>2018/06/12</td>
        <td>From 2018/06/12 To 2018/07/30</td>
        <td>Paternity Leave</td>
        <td>0</td>
        <td><input type="button" className="btn-danger" value="reject"/></td>
        <td><input type="button" className="btn-primary" value="approved"/></td>
      </tr>
      <tr>
        <td>Lysa</td>
        <td>Warehouse</td>
        <td>2018/06/12</td>
        <td>From 2018/06/12 To 2018/07/30</td>
        <td>Paternity Leave</td>
        <td>2</td>
        <td><input type="button" className="btn-danger" value="reject"/></td>
        <td><input type="button" className="btn-primary" value="approved"/></td>
      </tr>

      <tr>
        <td>Lysa</td>
        <td>Warehouse</td>
        <td>2018/06/12</td>
        <td>From 2018/06/12 To 2018/07/30</td>
        <td>Paternity Leave</td>
        <td>1</td>
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