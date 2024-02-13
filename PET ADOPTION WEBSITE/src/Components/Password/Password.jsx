import React from 'react'
import { Link } from 'react-router-dom'

import '../Css/Sample.css';

export default function ForgetPasswordPage() {
    return (
        <div className="container">
            <center><h2>Reset your password</h2></center><br></br>
            <center><h5>Enter email address to reset your password</h5></center>
            <br></br>
            <form action="/login">
                <p>
                    {/* <label >Email address</label><br/> */}
                    <input type="email" name="email" id="input-input"placeholder='Enter Email Address'required />
                </p>
                <br></br>
                <p>
                    <center><button id="sub_btn" type="submit">Submit</button></center>
                </p>
                <br></br>
            </form>
            <center><footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <br></br>
                <p><Link to="/">Back to Homepage</Link>.</p>
                <br></br>
            </footer></center>
        </div>
    )
}
