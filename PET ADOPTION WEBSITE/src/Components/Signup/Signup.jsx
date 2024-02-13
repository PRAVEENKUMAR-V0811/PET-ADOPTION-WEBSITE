import React from 'react'
import { Link } from 'react-router-dom'

import '../Css/Sample.css';

export default function SignUpPage() {

    return (
        <div className="container" style={{width: "450px", height: "500px"}}>
            <h2>Join us by creating account</h2>
            <br></br>
            <form action="/login">
                <p>
                    {/* <label>Username</label><br/> */}
                    <input type="text" name="first_name" id='input-input'placeholder='Username'required />
                </p>
                <br></br>
                <p>
                    {/* <label>Email address</label><br/> */}
                    <input type="email" name="email" id='input-input'placeholder='Email address'required />
                </p>
                <br></br>
                <p>
                    {/* <label>Password</label><br/> */}
                    <input type="password" name="password" id='input-input' placeholder='Password'required />
                </p>
                <br></br>
                <p>
                    <center><input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">terms of service</a></span>.</center>
                </p>
                <br></br>
                <p>
                    <Link to="/Login">
                    <center><button id="sub_btn" type="submit">Register</button></center></Link>
                </p>
                <br></br>
            </form>
            <center><footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer></center>
        </div>
    )

}