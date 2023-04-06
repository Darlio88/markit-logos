import Link from 'next/link';
import React from 'react';

//react-icons
import {FaPinterestP,FaFacebookF,FaTwitter} from "react-icons/fa"

const Footer = () => {
   return (

      <footer>
         <div className="footer__area footer-bg">
            <div className="footer__top pt-90 pb-50">
               <div className="container">
                  <div className="row">
                     <div className="footer__up col-xxl-6 col-xl-3 col-lg-3 col-md-3 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".3s">
                           <div className="footer__widget-head mb-35">
                              <h4 className="footer__widget-title">Follow our Socials</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__social mb-30">
                                 <ul>
                                    {/* <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li> */}
                                    {/* <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li> */}
                                    {/* <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li> */}
                                    <li><a href="#" className="fb"><FaFacebookF /></a></li>
                                    <li><a href="#" className="tw"><FaTwitter /></a></li>
                                    <li><a href="#" className="pin"><FaPinterestP /></a></li>
                                 </ul>
                              </div>
                              <div className="logo">
                                 <Link href="/">
                                    <span>
                                    <a >
                                      <img  src="/assets/img/logo/alternative-white.png" alt="logo" />
                                       {/*<span><a href="#">US</a> English</span>
                                           <span><a href="#">ES</a> Spanish</span>*/}
                                    </a>
                                    </span>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Support</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><a href="#">About Us </a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">FAQs</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Contacts</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><a href="tel:8184777122"> 818 477 7122</a></li>
                                    <li><a href="#">hello@workazi.com </a></li>
                                    <li><a href="#tel:8184777122">whatsapp </a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay=".5s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Support</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><a href="#">Get price quote </a></li>
                                    <li><a href="#">Book a call</a></li>
                                    <li><a href="#">Refund Policy</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-4">
                        <div className="footer__widget mb-40 wow fadeInUp" data-wow-delay="1.2s">
                           <div className="footer__widget-head">
                              <h4 className="footer__widget-title">Community</h4>
                           </div>
                           <div className="footer__widget-content">
                              <div className="footer__link">
                                 <ul>
                                    <li><a href="#">Forums</a></li>
                                    <li><a href="#">Community</a></li>
                                    <li><a href="#">Meetups</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Careers</a></li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                                          </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <div className="container">
                  <div className="footer__bottom-inner">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__copyright wow fadeInUp" data-wow-delay=".5s">
                              <p>Copyright © 2023 All Rights Reserved, Design by <a href="https://logos.co.ug" target = "_blank">Logos</a></p>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="footer__bottom-link wow fadeInUp text-md-end" data-wow-delay=".8s">
                              <ul>
                                 <li><a href="#">Licence</a></li>
                                 <li><a href="#">Privacy Policy </a></li>
                                 <li><a href="#">Affiliate Notice</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>

   );
};

export default Footer;