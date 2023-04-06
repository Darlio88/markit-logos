import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'
const ContactArea = () => {
   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();
     emailjs.sendForm('service_ead1rxj', 'template_5vpcim7', form.current, 'zrUNbcbU593W5z1d2')
       .then((result) => {
           console.log(result.text);
           toast.success('Submitted successfully')
           form.current.reset()
       }, (error) => {
           console.log(error.text);
           toast.error('Error')
       });
   };

   
   return (
   
      <>
      <section className="contact__area pt-105 pb-145">
            <div className="contact__shape">
               <img className="man-1" src="assets/img/icon/sign/man-1.png" alt=""/>
               <img className="circle" src="assets/img/icon/sign/circle.png" alt=""/>
               <img className="zigzag" src="assets/img/icon/sign/zigzag.png" alt=""/>
               <img className="dot" src="assets/img/icon/sign/dot.png" alt=""/>
               <img className="bg" src="assets/img/icon/sign/sign-up.png" alt=""/>
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-wrapper mb-55">
                        <h2 className="page__title-2">Leave Us a Message.</h2>
                        {/*<p>Jolly good bevvy butty its all gone to pot that quaint so I said cheers.</p>*/}
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-7 col-xl-7">
                     <div className="contact__wrapper  white-bg">
                        <div className="contact__form">
                           <form ref={form} onSubmit={sendEmail}>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Full Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Full name" name="name"/>
                                          <i className="fal fa-user"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Work email</h5>
                                       <div className="contact__input">
                                          <input required type="email" placeholder="e-mail address" name="email"/>
                                          <i className="fal fa-envelope"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Company Name</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Company Name" name="company"/>
                                          <i className="fal fa-smile"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Specify Service</h5>
                                       <div className="contact__input">
                                          <input required type="text" placeholder="Type here the service" name="service"/>
                                          <i className="fal fa-globe"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <div className="contact__input-wrapper mb-25">
                                       <h5>Message</h5>
                                       <div className="contact__input textarea">
                                          <textarea required placeholder="Tell us about your project" name="message"></textarea>
                                          <i className="fal fa-comment"></i>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-xxl-12">
                                    <button input type="submit" value="Send" className="m-btn m-btn-4" > <span></span> submit </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-5 col-xl-5">
                     <div className="contact__map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.331998963796!2d-122.01116068523717!3d37.33464804513288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sug!4v1679740931087!5m2!1sen!2sug" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                     {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26372442.740924265!2d-113.73851096740657!3d36.20808902923867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sug!4v1677758412852!5m2!1sen!2sug" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ContactArea;