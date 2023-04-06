import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {toast} from "react-toastify"


const Subscribe = () => {
   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ead1rxj', 'template_5vpcim7', form.current, 'zrUNbcbU593W5z1d2')
      .then((result) => {
         toast.success("you have successfully subscribed to our mailing list")
         form.current.reset()
      }, (error) => {
          console.log(error.text);
          toast.error(error.text)
      });
  };
   return (
      <>
         <section className="subscribe__area p-relative pt-100 pb-110" style={{background:`url(assets/img/bg/new-subscribe-bg.jpg)`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div className="subscribe__icon">
               <img className="ps" src="assets/img/icon/subscribe/ps.png" alt="" />
               <img className="wp" src="assets/img/icon/subscribe/wp.png" alt="" />
               <img className="html" src="assets/img/icon/subscribe/html.png" alt="" />
               <img className="f" src="assets/img/icon/subscribe/f.png" alt="" />
               <img className="man" src="assets/img/icon/subscribe/man.png" alt="" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="subscribe__content text-center wow fadeInUp" data-wow-delay=".5s">
                        <h3 className="subscribe__title">Have a project? <br /> Create your website now.</h3>
                        <p>Try our any product for FREE!</p>
                        <div className="subscribe__form wow fadeInUp" data-wow-delay=".7s">
                           <form ref={form} onSubmit={sendEmail}>           {/*//</div>action="#">*/}
                              <input type="email" name='email' placeholder="Email Address" />
                              <button type="submit" value="Send"  className="m-btn m-btn-black"><span></span> subscribe </button>
                           </form>
                           <p>Join Our News Letter.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Subscribe;