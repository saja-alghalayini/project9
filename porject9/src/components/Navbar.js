import React from 'react';
import { Routes, BrowserRouter, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../action/index";

import { UilBookMedical } from '@iconscout/react-unicons';
import { UilDiamond } from '@iconscout/react-unicons';
import { UilPadlock } from '@iconscout/react-unicons';
import { UilPhone } from '@iconscout/react-unicons';


function Navbar() {

    const dispatch = useDispatch();
    let user_id = sessionStorage.getItem("user_info");
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-dark py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                            <div className="d-inline-flex align-items-center">

                                {!user_id &&
                                    <a href="/login" className="btn-login">
                                        <span className="text-white " id="loginBtn" /> Login 
                                    </a>}
                                    
                                <span className="text-white pl-2">|</span>
                                {!user_id &&
                                    <a href="/register" className="btn-startgames">
                                        <span className="text-white pr-2" id="joinUstBtn" /> Register
                                    </a>}
                                {user_id &&
                                    <a href="/user">
                                        <span className="text-white " id="" /> Profile
                                    </a>}
                                    <span className="text-white pl-2">|</span>
                                {user_id &&
                                    <a href="/" onClick={() => dispatch(logout())}>
                                        <span className="text-white pl-2" id="logoutBtn" /> Logout
                                    </a>}
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
                        <a href="/" className="navbar-brand">
                            <img src='https://media.discordapp.net/attachments/1002099207177523221/1004000082548510871/Untitled-3.png?width=881&height=256' style={{ width: '150px' }} />
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
                                <a href="/" className="nav-item nav-link ">
                                    Home
                                </a>
                                <a href="/all" className="nav-item nav-link">
                                    All Product
                                    {/* <UilDiamond /> */}
                                </a>
                                <a href="/about" className="nav-item nav-link">
                                    About
                                </a>


                                <a href="/contact" className="nav-item nav-link">
                                    Contact
                                    {/* <UilPhone /> */}
                                </a>
                                <a href="/Uploader" className="nav-item nav-link ">
                                    Add Product
                                    {/* <UilBookMedical /> */}
                                </a>
                                {/* <a href="#" className="nav-item nav-link disabled  btn" >
                                    Shop
                                    <UilPadlock />
                                </a> */}
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