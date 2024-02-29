import "./userlogin.css";
import LOG from '../../assets/image6.png'
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";


const UserLogin = () => {
 const nav = useNavigate()
  
  return (
    <div className="loginbodypage">
      <div className="loginpage">
        <img src={LOG} className="image" onClick={()=>{ nav('/home-screen')}}/>
        <p className="textsign">Sign in by entering the information below</p>
        <div className="inputDiv">
          <div className="detail">
            <span className="span-text">Email<span style={{ color: "red" }}>*</span></span>
            <input type="email" placeholder="Enter Email" className="input-data" />
            <span className="span-text">Password<span style={{ color: "red" }}>*</span></span>
            <input type="password" placeholder="Enter Password" className="input-data" />
          </div>
          <div className="remeber-text">
            <input type="checkbox" className="checkbox" />
          Remember Password
                </div>
          <div className="forgotpass"onClick={() =>{ nav('/forgot-password')}}>Forgot Password ?</div>
        </div>

        <center><button className="loginbutton">LOGIN</button></center>
        <p className="donthaveaccount">Don’t have an account?<span style={{ color: "#2400FF", cursor: "pointer"}} onClick={() =>{ nav("/user-signup")}}>Create One Here</span></p>
      </div>
      <div className="imagepage">
        <p className="welcomtext">WELCOME</p>
        <span className="PlanPulse">Welcome To Plan Pulse Thank You For Choosing Us!!</span>
      </div>
    </div>
  )
}


export default UserLogin
