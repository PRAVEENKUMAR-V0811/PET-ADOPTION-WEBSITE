import React from 'react'
import { Link } from 'react-router-dom'

import "../Css/Sample.css";
export default function SignInPage() {
    return (
        <center><div className="container">
            <h2>Login</h2>
            <br></br>
            <form action="/home">
                <p>
                    {/* <label>Username or email address</label><br/> */}
                    <input type="text" name="first_name" id='input-input' style={mystyle} placeholder='UserName'required />
                </p>
                <br></br>
                <p>
                    {/* <label>Password</label> */}
                    
                    <input type="password" name="password" id='input-input' style={mystyle} placeholder='Password'required />
                </p>
                <br></br>
                <p>
                    <Link to="/pets">
                        <center><button id="sub_btn" type="submit">Login</button></center>
                    </Link>
                    
                </p>
                <br></br>
                <Link to="/forget-password"><label className="right-label" id="text"><center>Forget password?</center></label></Link>
                <br></br>
            </form>
            <footer>
                <center><p>First time? <Link to="/register">Create an account</Link>.</p></center>
                {/* <p><Link to="/">Back to Homepage</Link>.</p> */}
            </footer>
        </div></center>
    )
}
const mystyle = {
        width : "300px"
}