import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import backgroundImg from './img/backgroundImg.svg';
import honey from './img/honey.svg';
import matern from './img/matern.svg';


class LandingPage extends React.Component{

    
    render(){

        return (
                    <div>
                        <div className="con">
                                <nav className="navBar">
                                    <div className="spn"><h3 className="logo">ComName</h3></div>
                                    <div className="signUp">
                                    <input type="button" className="btn btn1" value="Login"></input>
                                    <input type="button" className="btn btn2" value="Sign Up"></input>
                                    </div>
                                </nav>

                                <section>
                                    <div className="headCon">
                                        <h1 className="display-4 head1">TimeOff Management App</h1>
                                        <h3 className="head">Take that leave here...</h3>
                                    </div>
                                </section>

                                <section>
                                    <div className="subCon1">
                                        <div className="innerSubCon hideUs">
                                            <img src={backgroundImg}  alt="subCon" width="200px" height="200px" className="imgSub"/>
                                            <p>Feeling Tired?</p> 
                                        </div>
                                        <div className="innerSubCon hideUs"><img src={honey}  alt="subCon" width="200px" height="200px" className="imgSub"/>
                                            <p>Need Maternity Leave?</p></div>
                                        <div className="innerSubCon hideUs"><img src={matern}  alt="subCon" width="200px" height="200px" className="imgSub"/>
                                            <p>Going for Honeymoon?</p></div>
                                    </div>
                                </section>

                                <section>
                                        <div className="signBtnDiv">
                                                <input type="button" value="SignUp Now" className="signBtn"></input>
                                        </div>
                                </section>
                        </div>
                        
                    </div>
            
        )
    }
}

export default LandingPage;

