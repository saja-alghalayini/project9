import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";


const ContactUs = () => {
  const form = useRef();

  const [display, setdisplay] = useState('none');



  const sendEmail = (e) => {
    e.preventDefault();


    setdisplay('block')
    emailjs.sendForm('service_i7axj16', 'template_8q2vw6w', form.current, 'jWSdz_DM5bIoL2AVI')
      .then((result) => {


        document.getElementById("alert").style.display = "block";
        console.log(result.text);
        console.log("message sent");

        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <Navbar />
        </div>

        <div className="row">
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Contact Us</h1>
                </div>

                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <a className="btn btn-outline-primary" href>Home</a>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <a className="btn btn-outline-primary disabled" href>Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Page Header end */}
        


          {/* Contact Start */}
          <div className="row">
          <div className="container-fluid bg-white">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="d-flex flex-column justify-content-center bg-primary h-100 p-5">
                    <div className="d-inline-flex border border-secondary p-4 mb-4">
                      <h1 className="flaticon-office font-weight-normal text-secondary m-0 mr-3" />

                      <div className="d-flex flex-column">

                        <h4>Our Office</h4>

                        <p className="m-0 text-white">5th area, Aqaba, Jordan</p>
                      </div>
                    </div>

                    <div className="d-inline-flex border border-secondary p-4 mb-4">
                      <h1 className="flaticon-email font-weight-normal text-secondary m-0 mr-3" />
                      <div className="d-flex flex-column">

                        <h4>Email Us</h4>

                        <p className="m-0 text-white">Epic_Antique@gmail.com</p>
                      </div>
                    </div>


                    <div className="d-inline-flex border border-secondary p-4">
                      <h1 className="flaticon-telephone font-weight-normal text-secondary m-0 mr-3" />
                      <div className="d-flex flex-column">

                        <h4>Call Us</h4>

                        <p className="m-0 text-white">+962 777 777 777</p>
                      </div>


                    </div>
                  </div>
                </div>


                <div className="col-lg-7 mb-5 my-lg-5 py-5 pl-lg-5">
                  <div className="contact-form">
                    <div id="success" />
                    <form name="sentMessage" id="contactForm" noValidate="novalidate" ref={form} onSubmit={sendEmail}>


                      <div className="control-group">
                        <input type="text" className="form-control p-4" id="name" name="user_name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                        <p className="help-block text-danger" />
                      </div>


                      <div className="control-group">
                        <input type="email" className="form-control p-4" id="email" name="user_email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                        <p className="help-block text-danger" />
                      </div>


                      <div className="control-group">
                        <input type="text" className="form-control p-4" id="subject" name="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                        <p className="help-block text-danger" />
                      </div>


                      <div className="control-group">
                        <textarea className="form-control p-4" rows={6} id="message" name="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                        <p className="help-block text-danger" />
                      </div>

                      {/* <div id="alert" className="alert alert-success" role="alert" style={{display:display}}/>
                     <h6 class="alert-heading" style={{display:display}}>Thank you For Contacting Us</h6> */}

                      <alert className="alert alert-success" severity="success" style={{ display: display }}>
                        <alertTitle>Success</alertTitle>
                        Your Message was sent. Thank you for contacting us, we'll reply as soon as possible
                      </alert>


                      <div>
                        <button className="btn btn-primary py-3 px-5" type="input" id="sendMessageButton">Send Message</button>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}


      </div>
      <div className="row mt-2">
        <Footer />
      </div>
    </>
  )
}
export default ContactUs;