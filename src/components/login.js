import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate  } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};


export const Login = () =>{

    let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isuserloggedin } = useSelector(state => state.loginUser);
  const { message } = useSelector(state => state.loginUser);
  const { users } = useSelector(state => state.userDB);

  const dispatch = useDispatch();
  const LOGIN_USER = 'LOGIN_USER';   

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    //setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(loginUser())
      navigate("/home");
      window.location.reload();
      //setLoading(false);
    }
  };
    const loginUser = () => (
        {type: LOGIN_USER, payload: { username:username,password:password }, users: users}
    );
  if (isuserloggedin) {
    return <Navigate to="/home" />;
  }
 
return(<>
            <div className="col-md-12">
            <div className="card card-container">
            <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
            />

            <Form onSubmit={handleLogin} ref={form}>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required]}
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
                    validations={[required]}
                />
                </div>

                <div className="form-group my-3">
                <button className="btn btn-primary btn-block" disabled={loading}>
                    {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Login</span>
                </button><br/>
                <a href="\signup">Not registered yet Sign up here</a>
                </div>

                {message && (
                <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                    {message}
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