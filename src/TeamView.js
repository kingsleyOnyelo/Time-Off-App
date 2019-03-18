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
                                         <Link to="/login"><input type="button" className="btn btn1" value="Welcome"></input></Link>
                                    </div>
                    </nav>
            </div>
            
        )
    }
}

export default TeamView;