import React from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">
                                <Link to={'login'}>
                                <a className="text-white pr-3" href="">
                                    Register
                                </a>
                                </Link>
                                <span className="text-white">|</span>
                                <a className="text-white px-3" href="">
                                    Login
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="text-white px-3" href="https://web.facebook.com/ebay/" target={'_blank'}>
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a className="text-white px-3" href="https://twitter.com/eBay" target={'_blank'} >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a className="text-white px-3" href="https://www.linkedin.com/company/copart/" target={'_blank'}>
                                    <i className="fab fa-linkedin-in" />
                                </a>
                                <a className="text-white px-3" href="https://www.instagram.com/sothebys/" target={'_blank'}>
                                    <i className="fab fa-instagram" />
                                </a>
                                <a className="text-white pl-3" href="https://www.youtube.com/sothebys" target={'_blank'}>
                                    <i className="fab fa-youtube" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="container position-relative" style={{ zIndex: 9 }}>
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="" className="navbar-brand">
                            <img src='/img/auction-logo.png' style={{width:'30%'}}/>
                            {/* <h1 className="m-0 display-5 text-white">
                                <span className="text-primary">i</span>DESIGN
                            </h1> */}
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between px-3"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav ml-auto py-0">
                                <a href="/" className="nav-item nav-link active">
                                    Home
                                </a>
                                <a href="/about" className="nav-item nav-link">
                                    About
                                </a>
                                <a href="/service" className="nav-item nav-link">
                                    Service
                                </a>
                                <a href="/project" className="nav-item nav-link">
                                    Project
                                </a>
                                <div className="nav-item dropdown">
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Pages
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="blog.html" className="dropdown-item">
                                            Blog Grid
                                        </a>
                                        <a href="single.html" className="dropdown-item">
                                            Blog Detail
                                        </a>
                                    </div>
                                </div>
                                <a href="/contact" className="nav-item nav-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Navbar End */}
            {/* Under Nav Start */}
            <div className="container-fluid bg-white py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 text-left mb-3 mb-lg-0">
                            <div className="d-inline-flex text-left">
                                <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3" />
                                <div className="d-flex flex-column">
                                    <h5>Our Office</h5>
                                    <p className="m-0">5th area, Aqaba, Jordan</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
                            <div className="d-inline-flex text-left">
                                <h1 className="flaticon-email font-weight-normal text-primary m-0 mr-3" />
                                <div className="d-flex flex-column">
                                    <h5>Email Us</h5>
                                    <p className="m-0">Epic_Antique@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
                            <div className="d-inline-flex text-left">
                                <h1 className="flaticon-telephone font-weight-normal text-primary m-0 mr-3" />
                                <div className="d-flex flex-column">
                                    <h5>Call Us</h5>
                                    <p className="m-0">+962 777 777 777</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Under Nav End */}
        </>
    )
}
export default Navbar;