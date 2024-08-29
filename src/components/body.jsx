import React from 'react';
import './body.css';
import logo from '../assets/sidemenu/logo.jpeg';
import users from '../assets/sidemenu/users.png';
import frame from '../assets/sidemenu/frame.png';
import percentage from '../assets/sidemenu/percent.png';
import dashboard from '../assets/sidemenu/dashboard.png';
import attendance from '../assets/sidemenu/attendance.png';

import card1 from '../assets/card/card1.png';
import card2 from '../assets/card/card2.png';
import card3 from '../assets/card/card3.png';

import userimage from '../assets/body/user (1).png';
import bookimage from '../assets/body/notebook.png';
import personimage from '../assets/body/people.png';
import studyimage from '../assets/body/study.png';
import messageimage from '../assets/body/email.png';
import sheetimage from '../assets/body/document.png';
import clinicimage from '../assets/body/hospital.png';



function Body(){
    return(
        <div className='Body'>
            {/* Side Menu */}
            <div className='Container'>
            <div className='mainlogo'>
                <img src={logo} alt='logo' className='logo'></img>
                </div> 

                <div className='userslogo'>
                <img src={users} alt='users' className='users'></img>
                <p>Student Management</p>
                </div>

                <div className='framelogo'>
                <img src={frame} alt='frame' className='frame'></img>
                <p>Financial Management</p>
                </div>

                <div className='qualitylogo'>
                <img src={percentage} alt='quality' className='quality'></img>
                <p>Quality Control</p>
                </div>

                <div className='dashboardlogo'>
                <img src={dashboard} alt='dashboard' className='dashboard'></img>
                <p>Report Delivery</p>
                </div>

                <div className='attendancelogo'>
                <img src={attendance} alt='attendance' className='attendance'></img>
                <p>Attendance</p>
                </div>
             </div>


             {/* cards section */}

             <div className='Cards'>
                <div className='navSection'>
                    <h2>Student Management</h2>
                    </div>
                    <div className='box'>
                    <div className='cardbox1' id='boxone'>
                        <img src={card1} alt='card1' className='card1logo'></img>
                        <h1>8</h1>
                        <p>Regular Students</p>
                        </div>
                        <div className='cardbox2' id='boxtwo'>
                            <img src={card2} alt='card2' className='card2logo'></img>
                            <h1>13</h1>
                        <p>Remedial Students</p>
                            </div>
                            <div className='cardbox3' id='boxthree'>
                                <img src={card3} alt='card2' className='card3logo'></img>
                                <h1>00</h1>
                        <p>In Paid Clubs</p>
                                </div>
                                </div>

                                <div className='menu'>
                                    <div className='Heading'>
                                    <h4>Menu</h4>
                                    </div>
                                    <div className='totalrows'>
                                    <div className='row1'>
                                    <div className='userimage'>
                                        <img src={userimage} className='user'></img>
                                        <p>Regular Employment</p>                                          
                                    </div>

                                    <div className='bookimage'>
                                        <img src={bookimage} className='book'></img>
                                        <p>Remedial Enrollment</p>                                          
                                    </div>

                                    <div className='personimage'>
                                        <img src={personimage} className='person'></img>
                                        <p>Club Management</p>                                          
                                    </div>
                                    </div>

                                    <div className='row2'>
                                    <div className='studyimage'>
                                        <img src={studyimage} className='study'></img>
                                        <p>Classroom Management</p>                                          
                                    </div>

                                    <div className='messageimage'>
                                        <img src={messageimage} className='message'></img>
                                        <p>SMS / EMAIL</p>                                          
                                    </div>

                                    <div className='sheetimage'>
                                        <img src={sheetimage} className='sheet'></img>
                                        <p>Attendance</p>                                          
                                    </div>
                                    </div>

                                    <div className='row3'>
                                    <div className='clinicimage'>
                                        <img src={clinicimage} className='clinic'></img>
                                        <p>Clinic</p>                                          
                                    </div>
                                    </div>

                                </div>
                                </div>
                                </div>

                                

        </div>
    );
}
export default Body;