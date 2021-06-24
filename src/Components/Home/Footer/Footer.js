import React from 'react';
import logo from '../../../Images/Navbar brand logo.png';

const Footer = () => {
    return (
        <footer class="page-footer font-small text-light bg-dark">

        <div style={{backgroundColor: '#6351ce'}}>
        <div class="container">

        <div class="row py-4 d-flex align-items-center">

            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6 class="mb-0">Get connected with us on social networks!</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">

            <a class="fb-ic">
                <i class="fab fa-facebook-f text-white mr-4"> </i>
            </a>
            <a class="tw-ic">
                <i class="fab fa-twitter text-white mr-4"> </i>
            </a>
            <a class="gplus-ic">
                <i class="fab fa-google-plus-g text-white mr-4"> </i>
            </a>
            <a class="li-ic">
                <i class="fab fa-linkedin-in text-white mr-4"> </i>
            </a>
            <a class="ins-ic">
                <i class="fab fa-instagram text-white mr-4"> </i>
            </a>
            </div>
        </div>
        </div>
    </div>
    <div class="container text-center text-md-left mt-5">
        <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

            {/* <h6 class="text-uppercase font-weight-bold">Company name</h6> */}
            <div class="bg-white mb-2 rounded-3">
                <img src={logo} class="img-fluid" style={{width: '253px'}} alt="company logo"/>
            </div>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
            consectetur
            adipisicing elit.</p>

        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase font-weight-bold">Products</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
            <p>
            <a href="#!" class="text-white">Bootstrap</a>
            </p>
            <p>
            <a href="#!" class="text-white">React Js</a>
            </p>
            <p>
            <a href="#!" class="text-white">BrandFlow</a>
            </p>
            <p>
            <a href="#!" class="text-white">Bootstrap React</a>
            </p>

        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 class="text-uppercase font-weight-bold">Useful links</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
            <p>
            <a href="#!" class="text-white">Your Account</a>
            </p>
            <p>
            <a href="#!" class="text-white">Become an Affiliate</a>
            </p>
            <p>
            <a href="#!" class="text-white">Shipping Rates</a>
            </p>
            <p>
            <a href="#!" class="text-white">Help</a>
            </p>

        </div>

        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 class="text-uppercase font-weight-bold">Contact</h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
            <p>
            <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p>
            <i class="fas fa-envelope mr-3"></i> info@example.com</p>
            <p>
            <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p>
            <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>

        </div>

        </div>

    </div>

    <div class="footer-copyright text-center py-3">© {(new Date()).getFullYear()} All rights reserved Yamin Miah. Copyright:
        <a href="#"> RepairMan.com</a>
    </div>

    </footer>
    );
};

export default Footer;