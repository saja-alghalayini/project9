import React, { useState } from 'react'
// import './login.css'
import { useSelector, useDispatch } from 'react-redux';
import { login } from "./action/index";
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function Login() {
  const dispatch = useDispatch();
  const admin = useSelector(state => state.login.admin);
  const error = useSelector(state => state.login.error);

  if (admin !== '') {
    window.location.href = "/";
  }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  document.body.style.overflow = 'hidden';
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
        </div>
        <div className='row'>
          <section className="h-100 w-100" style={{ backgroundColor: "#F3F6FF" }}>
            <div className="container ">
              <div className="row d-flex justify-content-center align-items-center h-100" style={{ backgroundColor: "#dfb163" }} >
                <div className="col-lg-12 col-xl-11" >
                  <div className="card text-black" style={{ borderRadius: 25 }}>
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-6 col-xl-7 d-flex align-items-center order-0 order-lg-2 float-left">
                          <img
                            src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="img h-75 w-75 mr-2"
                            alt="Sample image"
                          />
                        </div>
                        <div className="col-md-7 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: '#252531' }}>
                            Login
                          </p>
                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{ color: '#252531' }} />
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="form3Example3c" style={{ color: '#252531' }}>
                                  Your Email
                                </label>
                                <input
                                  type="email"
                                  id="form3Example3c"
                                  className="form-control"
                                  onChange={(e) => setEmail(e.target.value)}
                                  required
                                />
                                <span>{error}</span>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw" style={{ color: '#252531' }} />
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="form3Example4c" style={{ color: '#252531' }}>
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="form3Example4c"
                                  className="form-control"
                                  onChange={(e) => setPassword(e.target.value)}
                                  required
                                />
                                
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <input type="submit" defaultValue="Sign up" style={{ color: '#252531', borderColor: "#252531", backgroundColor: "#dfb163", borderRadius: "5px" }} className="w-100 h-100" value={'Login'} onClick={() => dispatch(login(email, password))}/>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 id='Error-div'">
                              <span>{error}</span>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='row'>
          <Footer />
        </div>
      </div>
      {/* // ///////////////////////////////// */}
      {/* <div className="login-form">
        <form>
          <header>
            <div className="photo">
              <img src="http://lorempixel.com/120/120/animals/" alt="" />
            </div>
            <div className="user-info">
              <img src="https://cdn.discordapp.com/attachments/1002099207177523221/1003297806192226394/logoo-removebg-preview_3.png" className="safari-logo-login" />

              <h3>Safari</h3>
              <h5>Admin Dashboard Login</h5>
            </div>
          </header>
          <section>
            <div id='Error-div'>
              <span>{error}</span>
            </div>
            <div className="input">
              <input
                type="email"
                placeholder="Email Address"
                name='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <input className="toggle-type"
                type="password"
                placeholder="Password"
                name='password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </section>
          <footer>
            <div className="action">
              <a onClick={() => dispatch(login(email, password))}>Login</a>
            </div>
          </footer>
        </form>
      </div> */}
    </>

  )
}

export default Login
