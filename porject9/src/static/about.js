import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdBadge } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../style/Home.css';

function About() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Navbar />
                </div>
                {/* Page Header Start */}
                <div className="container-fluid bg-secondary py-5">
                    <div className="container py-5">
                        <div className="row align-items-center py-4">
                            <div className="col-md-6 text-center text-md-left">
                                <h1 className="mb-4 mb-md-0 text-primary text-uppercase">About Us</h1>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="d-inline-flex align-items-center">
                                    <a className="btn btn-outline-primary" href>Home</a>
                                    <i className="fas fa-angle-double-right text-primary mx-2" />
                                    <a className="btn btn-outline-primary disabled" href>About Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header end */}

                {/* About Start */}
                <div className="container-fluid bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 mt-5 py-5 pr-lg-5">
                                <h6 className="text-primary font-weight-normal text-uppercase mb-3">
                                    Who We Are?
                                </h6>
                                <h1 className="mb-4 section-title">
                                    About Us
                                </h1>
                                <p className="mb-4">
                                    An auction is usually a process of buying and selling goods or services by offering them up for bids, taking bids, and then selling the item to the highest bidder or buying the item from the lowest bidder.
                                </p>
                                <ul className="list-inline">
                                    <li>
                                        <h5>
                                            <i className="far fa-check-square text-primary mr-3" />
                                            25+ Years Experience
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className="far fa-check-square text-primary mr-3" />
                                            Best Interior Design
                                        </h5>
                                    </li>
                                    <li>
                                        <h5>
                                            <i className="far fa-check-square text-primary mr-3" />
                                            Customer Satisfaction
                                        </h5>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-5">
                                <div className="d-flex flex-column align-items-center justify-content-center h-100 overflow-hidden">
                                    <img className="h-100" src="https://www.aljazeera.net/wp-content/uploads/2020/10/%D8%B5%D9%88%D8%B1%D8%A9-%D9%85%D9%8A%D8%AF%D8%A7%D9%86-2020-10-13T040218.348.png?w=770&resize=770%2C513" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                <div className="row">
                {/* Team Start */}
                <div className="container-fluid bg-light ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 mt-5">
                                <div className="py-5 px-4 h-100 bg-primary d-flex flex-column align-items-center justify-content-center">
                                    <h6 className="text-white font-weight-normal text-uppercase mb-3">Our Team</h6>
                                    <h1 className="mb-0 text-center">Meet Our Team Members</h1>
                                </div>
                            </div>
                            {/* **************************************************************************     Duaa */}
                            <div className="col-md-8 col-sm-6 p-0 py-sm-5">
                                <div className="row">
                                    <div className="col-md-12 col-sm-6 p-0 ">
                                        <div className="owl-carousel team-carousel position-relative p-0 py-sm-5">
                                            <div className="team d-flex flex-column text-center mx-3">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src="https://avatars.githubusercontent.com/u/100213753?v=4" alt="" />
                                                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/Dua-Alsafasfeh"><i className="fa-brands fa-github" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://www.linkedin.com/in/du-a-alsafasfeh-70a9a7147/"><i className="fa-brands fa-linkedin-in" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/Dua-Alsafasfeh/Projects"><i className="fa-solid fa-id-card-clip" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column bg-secondary text-center py-3">
                                                    <h5 className="text-white">Duaa Alsafasfeh</h5>
                                                    <p className="m-0">Product Owner</p>
                                                </div>
                                            </div>
                                            {/* **************************************************************************     Hadi */}
                                            <div className="team d-flex flex-column text-center mx-3">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src="https://avatars.githubusercontent.com/u/100237201?v=4" alt="" />
                                                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/Dua-Alsafasfeh"><i className="fa-brands fa-github" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://www.linkedin.com/in/du-a-alsafasfeh-70a9a7147/"><i className="fa-brands fa-linkedin-in" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/Dua-Alsafasfeh/Projects"><i className="fa-solid fa-id-card-clip" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column bg-secondary text-center py-3">
                                                    <h5 className="text-white">Hadi AL-Saden</h5>
                                                    <p className="m-0">Scrum Master</p>
                                                </div>
                                            </div>
                                            {/* **************************************************************************    Saja */}
                                            <div className="team d-flex flex-column text-center mx-3">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src="https://avatars.githubusercontent.com/u/100213822?v=4" alt="" />
                                                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/saja-alghalayini"><i className="fa-brands fa-github" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://www.linkedin.com/in/saja-al-ghalayini/"><i className="fa-brands fa-linkedin-in" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/saja-alghalayini/portfoli"><i className="fa-solid fa-id-card-clip" /></a>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column bg-secondary text-center py-3">
                                                    <h5 className="text-white">Saja Al Ghalayini</h5>
                                                    <p className="m-0">Full stack developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-sm-6 p-0 ">
                                        <div className="owl-carousel team-carousel position-relative p-0 ">
                                            {/* **************************************************************************    Roaa */}
                                            <div className="team d-flex flex-column text-center mx-3">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src="https://avatars.githubusercontent.com/u/100063786?v=4" alt="" />
                                                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/roayas"><i className="fa-brands fa-github" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://www.linkedin.com/in/roayaseen/"><i className="fa-brands fa-linkedin-in" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/roayas/ProjectHtmlCss"><i className="fa-solid fa-id-card-clip" /></a>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-column bg-secondary text-center py-3">
                                                    <h5 className="text-white">Roa` yasin</h5>
                                                    <p className="m-0">Full stack developer</p>
                                                </div>
                                            </div>
                                            {/* **************************************************************************    Tamara */}
                                            <div className="team d-flex flex-column text-center mx-3">
                                                <div className="position-relative">
                                                    <img className="img-fluid w-100" src="https://avatars.githubusercontent.com/u/100212077?v=4" alt="" />
                                                    <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://github.com/tamara126enad"><i className="fa-brands fa-github" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center mr-2 px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://www.linkedin.com/in/tamara-al-shabatat-060452123/"><i className="fa-brands fa-linkedin-in" /></a>
                                                        <a className="bg-gold btn btn-outline-primary text-center px-0" style={{ width: '38px', height: '38px' }} target={'_blank'} href="https://tamara126enad.github.io/My_Portfolio/"><i className="fa-solid fa-id-card-clip" /></a>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-column bg-secondary text-center py-3">
                                                    <h5 className="text-white">Tamara Al-Shabatat </h5>
                                                    <p className="m-0">Full stack developer</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</div>
                {/* Team End */}
                <div className="row">
                    <Footer />
                </div>
            </div>
        </>
    );
}
export default About;