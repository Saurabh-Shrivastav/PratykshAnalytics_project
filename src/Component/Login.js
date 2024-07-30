import React, { useState } from "react";
import './Login.css'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState('')

    const login = async (e) => {
        e.preventDefault()
        console.log(email, password);

        const loginData = new FormData();
        loginData.append('email', email)
        loginData.append('password', password)

        let loginResult = await fetch('http://35.173.198.231/login.php', {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type':'application/json'
            }
        })
        loginResult = await loginResult.json()
        console.log(loginResult);


        // const loginData = new FormData();
        //   loginData.append('email',email)
        //   loginData.append('password',password)

        //   let loginResult = await fetch('http://35.173.198.231/login.php',{
        //     method: "POST",
        //     body: JSON.stringify({email, password}),
        //     headers:{
        //         'Content-Type':'application/json'
        //     }
        //   })
        //   loginResult = await loginResult.json()
        //   console.log(loginResult);

        // if (email && password) {
        //     const auth = localStorage.setItem("user", JSON.stringify({ email, password }))
        // } else {
        //     alert("Please enter correct Details.")
        // }

    }

    return (
        <div className="main">
            <div className="row">
                {/* Left Side */}
                <div className="col-8 left">
                    <img src="/img/logo.jpg" width='100vw' />

                    <div className="hero">
                        <img src="/img/bg.png" width='100%' style={{ mixBlendMode: "darken" }} />
                        <h1>Welcome to the world of Trade Date!</h1>
                    </div>

                    <div className="header">
                        <p>© 2023 Zauba Statza, All Rights Reserved</p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="col-4 right">
                    <div className="form">
                        <h3>Please Sign in to your Account!</h3>

                        <div className="loginForm">
                            <label style={{ marginLeft: '16px' }}>Email Address</label>
                            <input type="text" placeholder="Enter email address"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />

                            <label style={{ marginLeft: '16px' }}>Password</label>
                            <input type="password" placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} />

                        </div> <br></br>
                        <button onClick={login} className="btn">Login</button>
                        {/* <pre>{response}</pre> */}
                    </div>
                </div>
                <div className="headerbottom">
                    <p>© 2023 Zauba Statza, All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}
export default Login;