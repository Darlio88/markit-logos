import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


const FreelancerDetailsArea = () => {
   const freelancer = useSelector(state => state.freelancers);
   const dispatch = useDispatch();
   // handleCartProduct
   const handleCartProduct = () => {
   }
   return (

      <section className="product__area pb-115">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 col-xl-8 col-lg-8">
                  <div className="product__wrapper">
                     <div className="product__details-thumb w-img mb-30">
                        <img src={product?.img_big} alt="product-details" />
                     </div>
                     <div className="product__details-content">
                        <div className="product__tab mb-40">
                           <ul className="nav nav-tabs" id="proTab" role="tablist">
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" type="button" role="tab" aria-controls="overview" aria-selected="true">Overview</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                 <button className="nav-link" id="support-tab" data-bs-toggle="tab" data-bs-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false">Support</button>
                              </li>
                           </ul>
                        </div>
                        <div className="product__tab-content">
                           <div className="tab-content" id="proTabContent">
                              <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                 <div className="product__overview">
                                    <h3 className="product__overview-title">Product Details</h3>
                                    <p>{`The little rotter absolutely bladdered wind up victoria sponge starkers cack posh jolly good lost the plot nancy boy bonnet plastered, bevvy say the bee's knees only a quid well bodge daft bits and bobs amongst my good sir golly gosh crikey, the wireless Eaton mush Harry codswallop boot porkies up the duff morish cor blimey guvnor. Faff about blower twit Why it's your round matie boy bog-standard, say A bit of how's your father.`}</p>  
                                    <div className="product__social m-social grey-bg-2">
                                       <h4 className="product__social-title">Follow us</h4>
                                       <ul>
                                          <li><a href="#" className="fb"><i className="fab fa-facebook-f"></i></a></li>
                                          <li><a href="#" className="tw"><i className="fab fa-twitter"></i></a></li>
                                          <li><a href="#" className="pin"><i className="fab fa-pinterest-p"></i></a></li>
                                          <li><a href="#" className="link"><i className="fab fa-linkedin-in"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
                                 <div className="product__support">
                                    <div className="post-comment-form wow fadeInUp" data-wow-delay=".2s">
                                       <h4 className="post-comment-title mb-25">Add a comment</h4>
                                       <form action="#">
                                          <div className="post-comment-inner">
                                             <div className="row">
                                                <div className="col-xl-12">
                                                   <div className="post-input d-sm-flex align-items-center mb-10">
                                                      <textarea placeholder="Comment for the author..."></textarea>
                                                      <button type="submit" className="m-btn m-btn-4"> <span></span> Post Comment</button>
                                                   </div>
                                                </div>
                                                <div className="col-xl-12">
                                                   <div className="post-agree d-flex align-items-center">
                                                      <input className="m-check-input" type="checkbox" id="m-agree" />
                                                      <label className="m-check-label" htmlFor='m-agree'>Email me when this comment receives a reply</label>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </form>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xxl-4 col-xl-4 col-lg-4">
                  <div className="product__details-sidebar ml-30">
                     <div className="product__proprietor white-bg mb-30">
                        <div className="product__proprietor-head mb-25">
                           <div className="product__prorietor-info mb-20 d-flex justify-content-between">
                              <div className="product__proprietor-avater d-flex align-items-center">
                                 <div className="product__proprietor-name">
                                    <h5><a href="#"> Made by Workazi</a></h5>
                                 </div>
                              </div>
                           </div>
                           <div className="product__proprietor-text">
                              <p>The goal of this event is to bring leaders in information technology together fromacross the globe.</p>
                           </div>
                        </div>
                        <div className="product__proprietor-body fix">
                           <ul className="mb-10 fix">
                              <li>
                                 <h6>Completed On:</h6>
                                 <span>03 March 2023</span>
                              </li>
                              <li>
                                 <h6>Version:</h6>
                                 <span>4.1.0</span>
                              </li>
                              <li>
                                 <h6>Framework:</h6>
                                 <span>React js:</span>
                              </li>
                           </ul>
                           <span >

                           </span>
                           <Link href="/product">
                                  <a className="m-btn m-btn-72" white-background >
                                    View More
                                  </a>
                                </Link>
                        </div>
                     </div>
                     <div className="sidebar__banner" style={{ background: `url(assets/img/banner/side-banner.jpg)`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                        <h4 className="sidebar__banner-title">Check Out <br />More of our done projects</h4>
                        <Link href="/product">
                           <a className="m-btn m-btn-white"> <span></span> Well Designed</a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

   );
};

export default FreelancerDetailsArea;