import React from 'react'
import bg from '../../Assets/Images/bg.png'
import avatar from '../../Assets/Images/avatar.png'
import wave from '../../Assets/Images/wave.png'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import Tilt from "react-parallax-tilt"
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineEmail} from 'react-icons/md'
import {RiLockPasswordLine} from 'react-icons/ri'
// import {Link} from 'react-router-dom'


function SignUp() {
    return (
        <div className='form_container'>
            <img className="wave" src={wave} />
            <div className="container">
                <div className="img">
                    <img src={bg} />
                </div>
                <div className="login-content">
                    <form action="/api/v1" method='post'>
                        <Tilt
                            perspective={500}
                            glareEnable={true}
                            glareMaxOpacity={0.45}
                            scale={1.02}
                            gyroscope={true}>
                            <img src={avatar} />
                        </Tilt>
                        <h2 className="title">Welcome</h2>
                        <div className="input-div one">
                            <div className="i">
                                <BiUserCircle size={120} className='form_icon'/>
                                {/* <AccountCircleOutlinedIcon className='form_icon' /> */}
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder='Username' name='name' />
                            </div>
                        </div>
                        <div className="input-div one">
                            <div className="i">
                            <MdOutlineEmail size={120} className='form_icon'/>
                                {/* <EmailOutlinedIcon className='form_icon' /> */}
                            </div>
                            <div className="div">
                                <input type="text" className="input" placeholder='Email'name='email' />
                            </div>
                        </div>
                        <div className="input-div pass">
                            <div className="i">
                                <RiLockPasswordLine size={120} className='form_icon'/>
                                {/* <LockOutlinedIcon className='form_icon' /> */}
                            </div>
                            <div className="div">
                                <input type="password" className="input" placeholder='Password'name='password' />
                            </div>
                        </div>
                        <input type="submit" value= 'Login'/>
                        {/* <button className="btn">Sign Up</button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
