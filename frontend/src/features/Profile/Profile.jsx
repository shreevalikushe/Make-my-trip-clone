import React, { useState, useEffect } from 'react'
import './Profile.css'
import {
    PersonOutlineOutlined,
    ExitToAppOutlined,
    ModeEditOutlineOutlined,
    RemoveRedEye,
    VisibilityOff
} from '@mui/icons-material';
import { Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout } from '../../features/auth/auth.actions'
import { getValue } from '../../Utils/LocalStorage';

export const Profile = () => {

    useEffect(() => {
        getProfile()
    }, [])


    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState({})

    let pass = "Shubham@1234"
    let securePass = ""
    for (var i = 0; i < pass.length; i++) {
        securePass += "*";
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate("/")
    }

    const getProfile = async () => {
        try {
            const authToken = getValue('userToken')
            const response = await fetch('http://localhost:1234/auth/getuser', {
                method: 'GET',
                headers: {
                    'authToken': `${authToken}`,
                    'content-type': 'application/json',
                }
            })
            const json = await response.json();
            if (json.status === 200) {
                setUser(json.user)
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(user)
    return (
        <div className='myProfileContainer'>
            <div className='profileContainer'>
                <div className='profilePicView'>
                    <p>{user.name[0]}</p>
                </div>
                <div className='userTitleSection'>
                    <p className="userTitle">{user.name}</p>
                    <p className="userTag">PERSONAL PROFILE</p>
                </div>
                <div className='profileTabs'>
                    <a href="#profile2">
                        <div className='indProfileTab' >
                            <PersonOutlineOutlined style={{ fontSize: 25, color: '#4a4a4a' }} />
                            <p>Profile</p>
                        </div>
                    </a>
                    <div className='indProfileTab' onClick={() => handleLogout()}>
                        <ExitToAppOutlined style={{ fontSize: 25, color: '#4a4a4a' }} />
                        <p>Logout</p>
                    </div>
                </div>
            </div>
            <div className='profile2Container' id='profile2'>
                <div className='profileContentView'>
                    <div className='profileContent'>
                        <p className='profileContentTitle'>Profile</p>
                        <p className='profileContentTag'>Basic info, for a faster booking experience</p>
                    </div>
                    <div className='profileEdit' onClick={() => setOpen(true)}>
                        <ModeEditOutlineOutlined style={{ fontSize: 20, color: '#53b2fe' }} />
                        <p>Edit</p>
                    </div>
                </div>
                <div className='profileDetails'>
                    <div className='indProfileContent'>
                        <p className='indProfileContentTitle'>NAME</p>
                        <p className='indProfileContentValue'>{user.name}</p>
                    </div>
                    <div className="profileContentDivider" />
                    <div className='indProfileContent'>
                        <p className='indProfileContentTitle'>MOBILE NUMBER</p>
                        <p className='indProfileContentValue'>+91-{user.mobile_number}</p>
                    </div>
                    <div className="profileContentDivider" />
                    <div className='indProfileContent'>
                        <p className='indProfileContentTitle'>EMAIL ID</p>
                        <p className='indProfileContentValue'>{user.email}</p>
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
            <Modal
                open={open}
                onClose={handleClose}
                onBackdropClick={handleClose}
            >
                <div className='screenView'>
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
                            <div className='modalCancelBtn' onClick={() => setOpen(false)}>
                                <p className='modalCancel'>Cancel</p>
                            </div>
                            <div className='modalSaveBtn'>
                                <p className='modalSave'>SAVE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
