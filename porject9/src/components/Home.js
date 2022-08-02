import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/Home.css';
import  { useState, useEffect } from "react";
import axios from 'axios';


function Home() {


 const [APIData, setAPIData] = useState([]);
 
  useEffect(() => {
    
    
    axios.get(`http://localhost/project-9/porject9/php/readProlimit.php`)
    .then((response) => {
        setAPIData(response.data);
        console.log(response.data,"res.data")
    })
}, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
        </div>
        <div className='row '>

          {/* Carousel Start */}
          <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100" src="https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '800px' }}>
                      <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Do you have a Traditional Antique!</h4>
                      <h3 className="display-3 text-white mb-md-4">Would you like to put your product up for Auction?</h3>
                      <a href="/Uploader" className="bg-gold btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Join Us</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="w-100" src="https://images.pexels.com/photos/827519/pexels-photo-827519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: '800px' }}>
                      <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">Do you have a Traditional Antique!</h4>
                      <h3 className="display-3 text-white mb-md-4">Would you like to put your product up for Auction?</h3>
                      <a href className="bg-gold btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4">Join Us</a>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-primary" style={{ width: '45px', height: '45px' }}>
                  <span className="carousel-control-prev-icon mb-n2" />
                </div>
              </a>
              <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-primary" style={{ width: '45px', height: '45px' }}>
                  <span className="carousel-control-next-icon mb-n2" />
                </div>
              </a>
            </div>
          </div>
          {/* Carousel End */}
        </div>
        {/*start  card of auction */}
        <div className='row'>
          <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col text-center mb-4">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                    All Products
                  </h6>
                  <h1 className="mb-4">
                    Show The Latest Products for Auctions &amp; Join Us
                  </h1>
                </div>
              </div>
              <div className="row pb-3">
              {APIData.map(u =>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={"img/" + u.img} alt="" height={300} />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <a className="bg-gold btn btn-primary">
                        <i class="fa-solid fa-gavel"></i>
                        </a>
                        <h5 className="m-0 ml-3 text-truncate">
                        {u.name}
                        </h5>
                      </div>
                      <p>
                      {u.description}
                      </p>
                      <div className="d-flex">
                      <a href={'/single/' + u.id} className="btn mr-2"><i className="fas fa-link"></i> Join Auction</a>
                      </div>
                    </div>
                  </div>
                </div>
)}
              </div>
            </div>
          </div>

        </div>

        {/* end card of auction */}
        <div className='row'>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Home;