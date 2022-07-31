import React from 'react';

function Footer(){
    return(
        <> {/* Footer Start */}
        <div className="container-fluid bg-dark text-white px-sm-3 px-md-5">
          <div className="row pt-5">
          <div className="col-lg-3 col-md-6 mb-5">
          <img src='/img/auction-logo.png' style={{width:'50%'}}/>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Get In Touch</h4>
              <p>
                <i className="fa fa-map-marker-alt mr-2" />
                5th area, Aqaba, Jordan
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2" />
                +962 777 777 777
              </p>
              <p>
                <i className="fa fa-envelope mr-2" />
                Epic_Antique@gmail.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a
                  className="bg-gold btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="https://twitter.com/eBay"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className=" bg-gold btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="https://web.facebook.com/ebay/" target={'_blank'}
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="bg-gold btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="https://www.linkedin.com/company/copart/" target={'_blank'}
                >
                  <i className="fab fa-linkedin-in" />
                </a>
                <a
                  className="bg-gold btn btn-outline-light rounded-circle text-center mr-2 px-0"
                  style={{ width: 38, height: 38 }}
                  href="https://www.instagram.com/sothebys/" target={'_blank'}
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Quick Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Home
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  About Us
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Services
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Our Projects
                </a>
                <a className="text-white" href="#">
                  <i className="fa fa-angle-right mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
              <h4 className="text-primary mb-4">Popular Links</h4>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" target={'_blank'} href="https://www.ebay.com/">
                  <i className="fa fa-angle-right mr-2" />
                  eBay	

                </a>
                <a className="text-white mb-2" target={'_blank'} href="https://www.sothebys.com/en/?locale=en">
                  <i className="fa fa-angle-right mr-2" />
                  Sotheby's
                </a>
                <a className="text-white mb-2" target={'_blank'} href="https://www.bidspotter.com/en-us">
                  <i className="fa fa-angle-right mr-2" />
                  BidSpotter
                </a>
                <a className="text-white mb-2" target={'_blank'} href="https://gsaauctions.gov/gsaauctions/gsaauctions/">
                  <i className="fa fa-angle-right mr-2" />
                  GSA Auctions
                </a>
                <a className="text-white" target={'_blank'} href="https://www.copart.com/">
                  <i className="fa fa-angle-right mr-2" />
                  Copart
                </a>
              </div>
            </div>
          </div>
          <div className="container border-top border-secondary pt-3 pb-3">
            <p className="m-0 text-center text-white">
              ©{" "}
              <a className="text-white font-weight-bold" href="#">
                Epic Auction
              </a>
              . All Rights Reserved. Designed by
              <a className="text-white font-weight-bold" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </p>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a href="#" className="bg-gold btn btn-lg btn-primary back-to-top">
          <i className="fa fa-angle-double-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </>
    )
}
export default Footer;