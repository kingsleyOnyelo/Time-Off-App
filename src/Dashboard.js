import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';


class Dashboard extends React.Component{
    render(){
        return (
            <div>
                    <nav className="navBar">
                                <Link to="/"><div className="spn"><h3 className="logo">TimeOff App</h3></div></Link>
                                    <div className="signUp">
                                    <Link to="/login"><input type="button" className="btn btn1" value="Welcome"></input></Link>
                                    
                                    </div>
                    </nav>

                    <div className="signDiv2">
                        <div className="container-fluid">
                        <br/>
                        <h3>Employee Calendar</h3><small>John Doe Calendar's </small><br/><h4>Statistics</h4>
                            <div class="row offRem">
                            
                                    <div class="col-sm">
                                    <div className="days1">
                                        <h1 className="daysLeft">8</h1>
                                        <hr></hr>
                                        <small>21 days remaining out 1 days allowance for leave.</small>
                                    </div>
                                    </div>



                                    <div class="col-sm">
                                    <div className="days1">
                                        <h5>Used so far</h5>
                                        <hr></hr>
                                        <small>Holiday:____________________<span><small>12.5</small></span></small><br/>
                                        <small>Sick Leave:___________<span><small>1 out of 12</small></span></small>
                                    </div>
                                    </div>


                                    <div class="col-sm">
                                    <div className="days1">
                                        <h5>Avalaible Types</h5>
                                        <hr></hr>
                                        <small>Holiday.</small><br/>
                                        <small>Maternity.</small><br/>
                                        <small>Paternity Leave.</small><br/>
                                        <small>Sick Leave (up to 10 days).</small>
                                    </div>
                                    </div>


                                    <div class="col-sm">
                                    <div className="days1">
                                        <h5>Details</h5>
                                        <hr></hr>
                                        <small>Supervisor:________John Doe</small><br/>
                                        <small>Department:___________Sales</small><br/>
                                        <small>Allowance in 2018:__21 days</small><br/>
                                        
                                    </div>
                                    </div>
                            </div>


                            <br/><br/>



                            <h4>Calendar</h4>
                            <div class="row offRem">
                            
                                    <div class="col-sm">
        
                                    

    
<ul className="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>






























                                    </div>


                                    
                                    <div class="col-sm">
                                    <ul className="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>

                                    </div>


                                    <div class="col-sm">
                                    <ul className="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>

                                    </div>


                                    <div class="col-sm">
                                    <ul className="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul className="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span className="active">10</span></li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li>15</li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>

                                    </div>
                            </div>

                            <br/><br/>



<h4>All Absences</h4>


                            
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Dashboard;