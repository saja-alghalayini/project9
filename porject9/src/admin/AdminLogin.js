import React, {useState} from 'react';
import './adminlogin.css';

function AdminLogin() {
    const [email, setEmail]=useState('');
    const [emailError, setEmailErorr]=useState('');

    const [password, setPassword]=useState('');
    const [passwordError, setPasswordError]=useState('');
    // const [successMsg, setSuccessMsg]=useState('');

    const handleEmailChange=(e)=>{
      // setSuccessMsg('');
      setEmailErorr('');
      setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
      // setSuccessMsg('');
      setPasswordError('');
      setPassword(e.target.value);
    }
      const handleFormSubmit=(e)=>{
        e.preventDefault();
      

      if (email!==''){
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(emailRegex.test(email)){
          setEmailErorr('');
          if (email==='admin@admin.com') {
            setEmailErorr('');
            if (password==='admin2022') {
              window.location.href='/dashboard';
            }else{
              setPasswordError('Invalid Password not match with email');
            }
          }else{
            setEmailErorr('Email dose not match')
          }
        }
      else{
        setEmailErorr('Invalid Email ');
      }
      }else{
        setEmailErorr('Email Required');
      }

      if (password!==''){

      }else{
        setPasswordError('Password Required');
      }
}
    return(
        <div className="login-wrapper">
        <h1>Admin Log In</h1>
        <form className='form-group formm' onSubmit={handleFormSubmit}>
          <label className='lbl'> Email </ label><br/>
            <input type="text" className='form-control inp' placeholder='Your Email' 
            onChange={handleEmailChange} value={email}/>
            {emailError&&<div className='error-msg'>{emailError}</div>}       

          <label className='lbl'>Password </label><br/>
            <input type="password" className='form-control inp' placeholder='Your Password'
            onChange={handlePasswordChange} value={password} />
            {passwordError&&<div className='error-msg'>{passwordError}</div>}       

          <div>
            <button type="submit" className='btn-warning admin-btn' >Submit</button>
          </div>
        </form>
      </div>
    );
    
}
export default AdminLogin;