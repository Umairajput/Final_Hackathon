import { useState } from "react"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WifiCallingIcon from '@mui/icons-material/WifiCalling';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom'

const SignUp = () => {
    // const [value, setValue] = useState()
    const [name, setName] = useState("")
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [password, setPassword] = useState('')

        return (
        <>
            <div className="Signup_form">
                <div className="Signup_form_heading">
                    <h1>SAYLANI WELFARE</h1>
                    <p>ONLINE DISCOUNT STORE</p>
                </div>
                <div className="input-div one">
                    <div className="i">
                        <AccountCircleIcon className='form_icon' />
                    </div>
                    <div className="div">
                        <input type="text" className="input" placeholder='Enter Your Name'
                            value={name} onChange={(e) => {
                                setName(e.target.value)
                                console.log(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className="input-div one">
                    <div className="i">
                        <WifiCallingIcon className='form_icon' />
                    </div>
                    <div className="div">
                        <input type="Number" className="input" placeholder='Enter Your Number'
                            value={number} onChange={(e) => {
                                setNumber(e.target.value)
                                console.log(e.target.value)
                            }}

                        />
                    </div>
                </div>

                <div className="input-div one">
                    <div className="i">
                        <MarkunreadIcon className='form_icon' />
                    </div>
                    <div className="div">
                        <input type="Email" className="input" placeholder='Enter Your Email'
                            value={email} onChange={(e) => {
                                setEmail(e.target.value)
                                console.log(e.target.value)
                            }}

                        />
                    </div>
                </div>

                <div className="input-div one">
                    <div className="i">
                        <VisibilityOffIcon className='form_icon' />
                    </div>
                    <div className="div">
                        <input type="Password" className="input" placeholder='Enter Your Password'
                            value={password} onChange={(e) => {
                                setPassword(e.target.value)
                                console.log(e.target.value)
                            }}

                        />
                    </div>
                </div>
                <div className="get_Started_button_div">
                    <button className='get_Started_button'> <Link to='/login' className='link'  > Sign Up</Link> </button>
                    <p className="already_account"> <Link to='/login' className='link_login' >Already Have an account? Login</Link> </p></div>

            </div>
        </>
    )
}

export default SignUp
