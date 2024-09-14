import React, { useState } from "react";
import { Auth } from "./auth/auth";


function Login(params) {

    const useAuth = Auth()
    const [username, setusername] = useState("");
    // console.log(username);
    const handeluser = () => {
        console.log(username)
        useAuth.login(username)
    }

    return (

        <div className="login">
            <p>الاسم</p>
            <input type="text" onChange={(e) => { setusername(e.target.value) }} />
            <button onClick={handeluser}>ارسال</button>
        </div>

    )
}
export default Login