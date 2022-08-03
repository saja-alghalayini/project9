import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AllPro() {
  const [APIData, setAPIData] = useState([]);
  const [id, setId] = useState('');

  useEffect(() => {
    setId(id);

    axios.get(`http://localhost/project-9/porject9/php/readPro.php`)
      .then((response) => {
        setAPIData(response.data);
        // console.log(response.data,"res.data")
      })
  }, [id])

  console.log(APIData, "res.data")

  return (


    <>
    <div className="container-fluid">
      <div className="row" >
        <Navbar/>
      </div>
      <div className="row">
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">All Products</h1>
                </div>

                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <a className="btn btn-outline-primary" href>Home</a>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href>All Products</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header end */}



      <div className="row">
      <div className="container mx-auto mt-4" >
        <div className="row">
          {APIData.map(u =>

            <div className="col-md-4 mt-5" style={{borderRadius:'20% '}}>
              <div className="card" >
                <img src={"img/" + u.img} className="card-img-top" style={{height:'250px'}} alt="..." />
                <div className="card-body" style={{height:'300px'}}>
                  <h5 className="card-title">{u.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Jod {u.min_price}</h6>
                  <p className="card-text">{u.description}</p>
                  <a href={'/single/' + u.id} className="btn btn-primary mr-2" style={{bottom:'0'}}><i className="fas fa-link"></i> Join Auction</a>

                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      <div className="row mt-5">
        <Footer />
      </div>
      </div>
    </>
  )
}
export default AllPro;