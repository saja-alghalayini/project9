import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../style/Home.css';
function Home() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Navbar />
        </div>
        <div className='row'>
          {/* Carousel Start */}
          <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100" src="https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 800 }}>
                      <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                        Do you have a Traditional Antique!
                      </h4>
                      <h3 className="display-3 text-white mb-md-4">
                        Would you like to put your product up for Auction?
                      </h3>
                      <a
                        href=""
                        className="bg-gold btn btn-primary btn-bg-dark py-md-3 px-md-5 mt-2 mt-md-4"
                      >
                        Join Us
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="w-100" src="https://images.pexels.com/photos/827519/pexels-photo-827519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 800 }}>
                      <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                        Creative Interior Design
                      </h4>
                      <h3 className="display-3 text-white mb-md-4">
                        Stay At Home In Peace
                      </h3>
                      <a
                        href=""
                        className="bg-gold btn btn-primary btn-bg-dark py-md-3 px-md-5 mt-2 mt-md-4"
                      >
                        Join Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div className="bg-gold btn btn-primary" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-prev-icon mb-n2" />
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div className="bg-gold btn btn-primary" style={{ width: 45, height: 45 }}>
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
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src="https://images.pexels.com/photos/159613/ghettoblaster-radio-recorder-boombox-old-school-159613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <a className="btn btn-primary" href="">
                          <i className="fa fa-link" />
                        </a>
                        <h5 className="m-0 ml-3 text-truncate">
                          Diam amet eos at no eos
                        </h5>
                      </div>
                      <p>
                        Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea
                        est diam eos, sit vero stet justo
                      </p>
                      <div className="d-flex">
                        <small className="mr-3">
                          <i className="fa fa-user text-primary" /> Admin
                        </small>
                        <small className="mr-3">
                          <i className="fa fa-folder text-primary" /> Web Design
                        </small>
                        <small className="mr-3">
                          <i className="fa fa-comments text-primary" /> 15
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src="https://images.pexels.com/photos/595699/pexels-photo-595699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <a className="btn btn-primary" href="">
                          <i className="fa fa-link" />
                        </a>
                        <h5 className="m-0 ml-3 text-truncate">
                          Diam amet eos at no eos
                        </h5>
                      </div>
                      <p>
                        Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea
                        est diam eos, sit vero stet justo
                      </p>
                      <div className="d-flex">
                        <small className="mr-3">
                          <i className="fa fa-user text-primary" /> Admin
                        </small>
                        <small className="mr-3">
                          <i className="fa fa-folder text-primary" /> Web Design
                        </small>
                        <small className="mr-3">
                          <i className="fa fa-comments text-primary" /> 15
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src="https://images.pexels.com/photos/1762446/pexels-photo-1762446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <a className="btn btn-primary" href="">
                          <i className="fa fa-link" />
                        </a>
                        <h5 className="m-0 ml-3 text-truncate">
                          Diam amet eos at no eos
                        </h5>
                      </div>
                      <p>
                        Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea
                        est diam eos, sit vero stet justo
                      </p>
                      <div className="d-flex">
                        <small className="mr-3">
                          <i className="fa fa-user text-primary" /> Admin
                        </small>
                        <small className="mr-3">
                          <i className="fa fa-folder text-primary" /> Web Design
                        </small>
                        <small className="mr-3">
                          <i className="fa fa-comments text-primary" /> 15
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
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