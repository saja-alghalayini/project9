import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./contact.css";

function Contact() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar/>
        </div>
        <br/>
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
        {/* Page Header Start */}
        <div className="row">
        {/* Contact Start */}
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
                  <form name="sentMessage" id="contactForm" noValidate="novalidate">
                    <div className="control-group">
                      <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                      <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                      <textarea className="form-control p-4" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                      <p className="help-block text-danger" />
                    </div>
                    <div>
                      <button className="btn btn-primary py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
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
          <Footer/>
      </div>
    </>
  )
}
export default Contact;