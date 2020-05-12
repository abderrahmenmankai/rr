import React from 'react';
import './App.css';
import {Button, Form, FormGroup, Label, Input}
  from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <form className="login-form">
      <h1 className="text-center">
        <span className="font-weight-bold">GoMyCode</span>
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <label>Email</label><br></br>
        <input type="email" placeholder="Email"/>
      </FormGroup>
      <FormGroup>
        <label>Password</label><br></br>
        <input type="Password" placeholder="Password"/>
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">
        Log in
      </Button>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <FacebookLoginButton className="mt-3 mb-3"/>
      <div className="text-center">
        <a href="/sing-up">Sing up</a>
        <span className="p-2">|</span>
        <a href="/Forget-Password">Forget Password</a>

      </div>
      
    </form>

  );
}

export default App;
