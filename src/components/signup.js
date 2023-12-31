import {React, useRef, useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link } from 'react-router-dom';
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };
export const Signup = () =>{
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { message } = useSelector(state => state.userDB);
    const { userAlreadyRegister } = useSelector(state => state.userDB);
    const dispatch = useDispatch();
    const REGISTER_USER = 'REGISTER_USER';   
    const RESET_USER_SIGNUP = 'RESET_USER_SIGNUP';

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    
      const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };
    
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    
    const handleRegister = (e) => {
        e.preventDefault();
    
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
            dispatch(registerUser())
        }
      };
    const registerUser = () => (
        {type: REGISTER_USER, payload: { username:username,password:password,email:email }}
   );
   const resetUserState = () => (
    {type: RESET_USER_SIGNUP}
  
);
    return( <>
            <div className="col-md-12">
        <div className="card card-container">
            <img 
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
            />

            <Form onSubmit={handleRegister} ref={form}>
            {!userAlreadyRegister && (
                <div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vusername]}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                    />
                </div>
                
                <div className="form-group my-2">
                <a href="\login" className='mx-2'> Cancel</a>
                    <button className="btn btn-primary btn-block mx-20">Sign Up</button>                    
                </div>
                </div>
            )}

            {message && (
                <div className="form-group">
                <div className={ !userAlreadyRegister ? "alert alert-success" : "alert alert-danger" } role="alert">
                    {message}
                    <div className='my-3'>
                        <Link to="..\signup" onClick={()=>dispatch(resetUserState())}>Click here to signup</Link>
                    </div>
                </div>
                </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    </div>
        </>
    )
}