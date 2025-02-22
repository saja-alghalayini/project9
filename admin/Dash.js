import React from 'react';
import './dash.css';
import {Link } from 'react-router-dom';

function Dashboard() {


    return(
        <>
  <link
    href="https://fonts.googleapis.com/css?family=Lato:400,300,700" rel="stylesheet"  type="text/css" />
  <div className="app-container">
    <nav className="navv">
      <img src='/logo.png' width={'100px'} style={{marginInline:'30px'}} />
      <ul className="nav__list">
        <li className="nav__list-item nav__list-item--active">
          <a className="nav__item-link w-100">
           <h2>Dashboard</h2> </a>
        </li>
        {/* <li className="nav__list-item ">
          <Link to="/auction" className="nav__item-link">
            Auction
          </Link>
        </li> */}
        <li className="nav__list-item ">
          <Link to="/auction" className="nav__item-link">
            Auction
          </Link>
        </li>
        <li className="nav__list-item">
          <a href="/" className="nav__item-link">
            Users
          </a>
        </li>
        {/* <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Locations
          </a>
        </li> */}
        <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Comments
          </a>
        </li>
        {/* <li className="nav__list-item">
          <a href="#" className="nav__item-link">
            Statuses
          </a>
        </li> */}
        <li className="nav__list-item">
          <Link to="/loginA" className="nav__item-link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
    <div className="app-view">
      <nav className="utility-bar">
        <div className="utility-bar__inner">
          <ul className="utility-bar__list">
            <li className="utility-bar__list-item">
            </li>
            <li className="utility-bar__list-item">
              <a href="#" className="utility-bar__item-link">
                {/* by Nick Novell https://thenounproject.com/search/?q=notification&i=430200               */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                  fill="#999"
                  width="20px"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality"
                  }}
                  viewBox="0 0 0.276083 0.32331250000000004"
                  x="0px"
                  y="0px"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <defs></defs>
                  <g>
                    <path
                      className="fil0"
                      d="M0.185915 0.247296c-0.00283406,0.024408 -0.0235765,0.0433539 -0.0487436,0.0433539 -0.0251671,0 -0.0459057,-0.0189459 -0.0487436,-0.0433539l0.0974872 0zm-0.11863 -0.198392c0.015799,-0.0138347 0.0311442,-0.0218257 0.0461308,-0.0250946 6.4844e-005,-0.0131595 0.0107527,-0.0238092 0.0239312,-0.0238092 0.0130794,0 0.0237062,0.0104933 0.0239236,0.0235193 0.0154252,0.00307055 0.0312395,0.0111227 0.047523,0.0253845 0.0264907,0.0291493 0.0340927,0.0621854 0.0291378,0.0978076 -0.00316973,0.076226 0.0178474,0.055453 0.0381511,0.0874021 -0.0460163,0 -0.0920289,0 -0.138041,0 -0.0460163,0 -0.0920289,0 -0.138041,0 0.0203038,-0.031949 0.0413171,-0.0111761 0.0381511,-0.0874021 -0.00495866,-0.0356222 0.00264335,-0.0686583 0.029134,-0.0978076z"
                    />
                  </g>
                </svg>
                {/*               Alerts */}
                <span className="utility-bar__indicator">3</span>
              </a>
            </li>
          </ul>
          <a className="utility-bar__account">
            <span className="utility-bar__account-name">ِadmin@mail.com</span>
          </a>
        </div>
      </nav>
      <main className="contentt">
        <h1> Information  </h1>
        {/* <div className="container text-center">
          <div className="row">
            <div className="col">
              Column
            </div>
            <div className="col">
              Column
            </div>
            <div className="col">
              Column
            </div>
          </div>
        </div> */}

<div className='boddy'>
<div class="cardd auc">
  <div class="contentt dd">Auctions</div>
</div>

<div class="cardd user ">
  <div class="contentt dd">Users</div>
</div>

<div class="cardd comment">
  <div class="contentt dd">Comments</div>
</div>

</div>
       </main>
    </div>
  </div>

</>


        );
    }


export default Dashboard;