
import { Link } from "react-router-dom";
import herologo from "../assets/herologo.png";
import "./sign.css";
import { IoEyeOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

function Login() {


  return (
    <>
      <div className="signupbody">
        <div className="signuplogo2">
          <img src={herologo} className="log" alt="mainlogo" />
          <p>
            <Link to="/signup">Go Back</Link>
          </p>
        </div>
        <div className="signuppage">
          <div className="frame">
            <div className="signuplogo">
              <img src={herologo} className="logo" alt="mainlogo" />
            </div>
            <div className="content">
              <h1>Welcome Back</h1>
              <p>Please fill in your details below to create your account</p>
            </div>
            <form className="signupf">
              <div>
                <label>Email Address</label>
                <input type="text" name="email" />
              </div>
              <div className="password-field">
                <label>Password</label>
                <div className="input-wrapper">
                  <input type="text" name="password"  />
                  <IoEyeOutline className="eye-icon" />
                </div>
              </div>
            </form>
            <div className="terms">
              <p>
                <MdCheckBoxOutlineBlank />
              </p>
              <h5>agree to our Terms of Service and Privacy Policy.</h5>
            </div>
          <button className="signbtn">Login  <Link to="/goal">{'>>>'}</Link></button>
            <p className="seperationtxt">or</p>
            <div className="subsignup">
              <button className="google">
                <p>
                  <FcGoogle />
                </p>
                Continue With Google
              </button>
              <button className="apple">
                <p>
                  <FaApple />
                </p>
                Continue With Apple
              </button>
            </div>
            <p className="lastlne">
              Already Have an Account{" "}
              <span className="tologin">
                <Link to="/signup">Signup Here |</Link> <Link to="/">Go Back</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
