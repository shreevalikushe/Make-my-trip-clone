import React, { useState } from 'react'
import '../CSS/Profile.css'
import {
    PersonOutlineOutlined,
    ExitToAppOutlined,
    ModeEditOutlineOutlined,
    RemoveRedEye,
    VisibilityOff
} from '@mui/icons-material';

export const Profile = () => {

    const [show, setShow] = useState(false)

    let pass = "Shubham@1234"
    let securePass = ""
    for (var i = 0; i < pass.length; i++) {
        securePass += "*";
    }
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
                    <div className='indProfileContent'>
                        <p className='indProfileContentTitle'>NAME</p>
                        <p className='indProfileContentValue'>Shubham Gadge</p>
                    </div>
                    <div className="profileContentDivider" />
                    <div className='indProfileContent'>
                        <p className='indProfileContentTitle'>MOBILE NUMBER</p>
                        <p className='indProfileContentValue'>+91-9765778934</p>
                    </div>
                    <div className="profileContentDivider" />
                    <div className='indProfileContent'>
                        <p className='indProfileContentTitle'>EMAIL ID</p>
                        <p className='indProfileContentValue'>shubhamgadge722@gmail.com</p>
                    </div>
                    <div className="profileContentDivider" />
                    <div className='indProfilePasswordSection'>
                        <div className='indProfileContent'>
                            <p className='indProfileContentTitle'>PASSWORD</p>
                            {show ?
                                <p className='indProfileContentValue'>{pass}</p>
                                :
                                <p className='indProfileContentValue'>{securePass}</p>
                            }
                        </div>
                        <div>
                            {show ?
                                <div onClick={() => setShow(!show)} className="visibilityIcon">
                                    <VisibilityOff style={{ fontSize: 20, color: '#53b2fe' }} />
                                </div>
                                :
                                <div onClick={() => setShow(!show)} className="visibilityIcon">
                                    <RemoveRedEye style={{ fontSize: 20, color: '#53b2fe' }} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="modalContainer">
                <h2>Edit Profile</h2>
                <div className='modalInputs'>
                    <div className='modalIndInput'>
                        <label htmlFor="name" className='modalInputLabels'>Full Name</label>
                        <input type="text" id='name' className='profileEditInput' />
                    </div>
                    <div className='modalIndInput'>
                        <label htmlFor="name" className='modalInputLabels'>Mobile Number</label>
                        <input type="number" id='mobile_number' className='profileEditInput' />
                    </div>
                    <div className='modalIndInput'>
                        <label htmlFor="name" className='modalInputLabels'>Email Id</label>
                        <input type="text" id='email' className='profileEditInput' />
                    </div>
                </div>
                <div className='modalBtns'>
                    <div className='modalCancelBtn'>
                        <p className='modalCancel'>Cancel</p>
                    </div>
                    <div className='modalSaveBtn'>
                        <p className='modalSave'>SAVE</p>
                    </div>
                </div>
            </div>
        </>
    )
}
