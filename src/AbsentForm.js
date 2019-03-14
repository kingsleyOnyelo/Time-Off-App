import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


class AbsentForm extends React.Component{


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
                                    
                                    <Link to="/login"><input type="button" className="btn btn1" value="Welcome"></input></Link>
                                    
                                    </div>
                    </nav>

                    <div className="signDiv2">
                    <div className="container-fluid"><br/><br/>
                    <div className="formDiv">
                    <form>
                            <select name="Country" className="form-control col-sm">
                                <option value="Type of Leave">Type of Leave</option>
                                <option value="Holiday">Holiday</option>
                                <option value="Maternity">Maternity</option>
                                <option value="Paternity Leave">Paternity Leave</option>
                                <option value="Sick Leave">Sick Leave</option>
                            </select>
                            
                            <label>From</label>
                            <label className="lbl4">To</label><br/>
                            <input type="date" className="col-sm-6" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input>
                            
                            <input type="date" className="col-sm-6" value="2018-07-22" min="2018-01-01" max="2018-12-31"></input><br/><br/>
                            <input type="text" placeholder="duration"></input><br/><br/>
                            <textarea rows="4" cols="50" className="col-sm">

                            </textarea><br/><br/>
                            <input type="submit" value="Submit" className="fname1"></input>
                        
                    </form>
                    </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default AbsentForm;