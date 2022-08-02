import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { username, email, password, confirmPass, signup } from "./action";
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Signup() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.register);

  const handleSubmit = (e) => {
    e.
    dispatch(signup());

  }
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
        </div>
        <div className='row '>
          <section className="vh-100 w-100" style={{ backgroundColor: "#F3F6FF"}}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100"style={{ backgroundColor: "#dfb163"}} >
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
                            Register
                          </p>
                          <form className="mx-1 mx-md-4" onSubmit={() => handleSubmit()}>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-user fa-lg me-3 fa-fw" style={{ color: '#252531' }} />
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="form3Example1c" style={{ color: '#252531' }}>
                                  Your Name
                                </label>
                                <input
                                  type="text"
                                  id="form3Example1c"
                                  className="form-control"
                                  onChange={(e) => dispatch(username(e.target.value))}
                                  required
                                />
                                <span>{error.usernameError}</span>
                              </div>
                            </div>
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
                                  onChange={(e) => dispatch(email(e.target.value))}
                                  required
                                />
                                <span>{error.emailError}</span>
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
                                  onChange={(e) => dispatch(password(e.target.value))}
                                  required
                                />
                                <span>{error.passError}</span>
                              </div>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw" style={{ color: '#252531' }} />
                              <div className="form-outline flex-fill mb-0">
                                <label className="form-label" htmlFor="form3Example4cd" style={{ color: '#252531' }}>
                                  Repeat your password
                                </label>
                                <input
                                  type="password"
                                  id="form3Example4cd"
                                  className="form-control"
                                  required
                                  onChange={(e) => dispatch(confirmPass(e.target.value))}
                                />
                                <span>{error.confirmPassError}</span>
                              </div>
                            </div>
                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 ">
                              {(error.usernameError || error.emailError || error.passError || error.confirmPassError)
                                ? <input type="submit" defaultValue="Sign up" disabled value={'Register'} style={{ color: '#252531', borderColor: "#252531",backgroundColor:"#dfb163", borderRadius: "5px" }} className="w-100 h-100"/>
                                : <input type="submit" defaultValue="Sign up" style={{ color: '#252531', borderColor: "#252531",backgroundColor:"#dfb163", borderRadius: "5px" }} className="w-100 h-100" value={'Register'}/>
                              }
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

    </>
  )
}
export default Signup;