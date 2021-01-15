
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Signin(props) {
  const {email,setEmail,password, setPassword,error,setError}=props;
  const submitHandler = (e) => {
    e.preventDefault();
    if(email==="" || password===""){
        setError("usename or password required correctly");
    }
    else{
        setError("");
        props.history.push('/');
    }
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="formcontainer">
        <li>
          <h2>Sign-In</h2>
        </li>
        <li>
          <div>{error}</div>
        </li>
        <li>
          <label htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to="/register"  className="button secondary textcenter" >Create your New Look account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default Signin;