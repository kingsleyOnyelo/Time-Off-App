import React from 'react';
import './style.css';
import matern from './img/matern.svg';



export default class Sign extends React.Component{
    render(){
        return (
            <div>
        <div className="signDiv1">
            

            <div className="signCon2">
                <input type="text" placeholder="First Name" className="fname form-control"></input>
                <input type="text" placeholder="Last Name" className="fname form-control"></input>
                <input type="email" placeholder="Email Name" className="fname form-control"></input>
                <input type="password" placeholder="Password" className="fname form-control"></input><br/>
                <input type="button" value="Submit" className="fname form-control"></input>
                
            </div>
        </div>
        </div>
        
        );
    }
}

