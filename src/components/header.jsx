import React from 'react';
import './header.css';
import logo from '../assets/sidemenu/logo.jpeg';
import users from '../assets/sidemenu/users.png';
import frame from '../assets/sidemenu/frame.png';
import percentage from '../assets/sidemenu/percent.png';
import dashboard from '../assets/sidemenu/dashboard.png';
import attendance from '../assets/sidemenu/attendance.png';


function HeaderLeft(){
    return(
        <div className='Header'>
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
        </div>
    );
}
export default HeaderLeft;