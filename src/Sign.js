import React from 'react';
import './style.css';
import matern from './img/matern.svg';



export default class Sign extends React.Component{
    render(){
        return (
            <div>
        <div className="signDiv1">
            

            <div className="signCon2">
            <input type="text" placeholder="Company Name" className="fname form-control" required></input>
                <input type="text" placeholder="First Name" className="fname form-control" required></input>
                <input type="text" placeholder="Last Name" className="fname form-control" required></input>
                <input type="email" placeholder="Email Address" className="fname form-control" required></input>
                <input type="password" placeholder="Password" className="fname form-control" required></input>
                <input type="password" placeholder="Confirm Password" className="fname form-control" required></input>
                <select name="Country" className="fname form-control">
                    <option value="Canada" >Canada</option>
                    <option value="USA">USA</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Ghana">Ghana</option>
                </select>     <br/>
                <input type="button" value="Submit" className="fname1"></input>
                
            </div>
        </div>
        </div>
        
        );
    }
}

