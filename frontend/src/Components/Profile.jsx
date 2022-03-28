import React from 'react'
import '../CSS/Profile.css'
import { PersonOutlineOutlined, ExitToAppOutlined, ModeEditOutlineOutlined } from '@mui/icons-material';

export const Profile = () => {
    return (
        <>
            <div className='profileContainer'>
                <div className='profilePicView'>
                    <p>SG</p>
                </div>
                <div className='userTitleSection'>
                    <p className="userTitle">Shubham Gadge</p>
                    <p className="userTag">PERSONAL PROFILE</p>
                </div>
                <div className='profileTabs'>
                    <div className='indProfileTab'>
                        <PersonOutlineOutlined style={{ fontSize: 25, color: '#4a4a4a' }} />
                        <p>Profile</p>
                    </div>
                    <div className='indProfileTab'>
                        <ExitToAppOutlined style={{ fontSize: 25, color: '#4a4a4a' }} />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            <div className='profile2Container'>
                <div className='profileContentView'>
                    <div className='profileContent'>
                        <p className='profileContentTitle'>Profile</p>
                        <p className='profileContentTag'>Basic info, for a faster booking experience</p>
                    </div>
                    <div className='profileEdit'>
                        <ModeEditOutlineOutlined style={{ fontSize: 20, color: '#53b2fe' }} />
                        <p>Edit</p>
                    </div>
                </div>
                <div className='profileDetails'>
                    <div className='indProfileContentTitle'>
                        <p>NAME</p>
                        <p>MOBILE NUMBER</p>
                        <p>EMAIL ID</p>
                        <p>PASSWORD</p>
                    </div>
                    <div className='indProfileContentValue'>
                        <p>Shubham Gadge</p>
                        <p>+91-9765778934</p>
                        <p>shubhamgadge722@gmail.com</p>
                        <p>Shubham@1234</p>
                    </div>
                </div>
            </div>
        </>
    )
}
