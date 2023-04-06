import Link from 'next/link';
import React,{useRef} from 'react';
import emailjs from "@emailjs/browser"
import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';
import BlogSideBar from '../Blog/BlogSideBar';
import Footer from '../Home/Footer';
import {FaPinterestP,FaFacebookF,FaTwitter,FaLinkedinIn} from "react-icons/fa"

const BlogDetailsArea = () => {
   const blogs = useSelector(state => state.blogs.blogs);
   const blogItem = useSelector(state => state.blogs.specificItem);
   //  dispatch
   const dispatch = useDispatch();
   const form = useRef();
   const sendEmail = (e) => {
     e.preventDefault();
     emailjs.sendForm('service_ead1rxj', 'template_5vpcim7', form.current, 'zrUNbcbU593W5z1d2')
       .then((result) => {
           console.log(result.text);
           alert('Submitted successfully')
       }, (error) => {
           console.log(error.text);
           alert('Error')
       });
   };

   return (
      <>
         <section className="page__title-area  pt-85">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8">
                     <div className="page__title-content mb-50">
                        <div className="postbox__meta d-flex">
                           <div className="postbox__tag-2">
                              {/* <a href="#">Digital,</a>
                              <a href="#">Marketing. </a> */}
                              <a href="#">{blogItem.category}</a>
                           </div>
                           <div className="postbox__time">
                              <span>4 min read</span>
                           </div>
                        </div>
                        <h2 className="page__title">{blogItem.title}</h2>
                        <div className="postbox__author-2 mt-20">
                           <ul className="d-flex align-items-center">
                              <li>
                                 <div className="postbox__author-thumb-2">
                                    <img src={`/${blogItem.user_img}`} alt="" />
                                 </div>
                              </li>
                              <li>
                                 <h6><a href="#">{blogItem.name}</a></h6>
                                 <span><a href="#">View Profile</a></span>
                              </li>
                              <li>
                                 <h6>{blogItem.date}</h6>
                                 <span>Published</span>
                              </li>
                              <li className="d-none d-sm-block">
                                 <h6>Join the Conversation </h6>
                                 <span>2 comments</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


         {/*postbox__area  */}
         <section className="postbox__area pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__wrapper">
                        <div className="postbox__thumb postbox__thumb-2 fix w-img mb-30">
                           <a href="#"><img src={`/${blogItem.img}`} alt="" /></a>
                        </div>
                        <div className="postbox__details mb-30" style={{paddingTop:"2rem", paddingBottom:"2rem"}}>
                           <p className="drop-cap">
                           {blogItem.desc}
                           </p>
                        </div>
         
                        <div className="postbox__quote-2 mb-50">
                           <blockquote>
                              <h4>“Even if we can go very far in the detail of the user experience  terms of design, a bad copy can completely” </h4>
                              <span>Sophie Ianiro</span>
                           </blockquote>
                        </div>
                        <div className="postbox__share m-social mb-80">
                           <h5>The share</h5>
                           <ul>
                           
                              <li><a href="#" className="fb"> <FaFacebookF /> </a></li>
                              <li><a href="#" className="tw"><FaTwitter /> </a></li>
                              <li><a href="#" className="pin"><FaPinterestP /></a></li>
                              <li><a href="#" className="link"><FaLinkedinIn /></a></li>
                           </ul>
                        </div>
                       {/* <div className="postbox__author-3 d-sm-flex grey-bg-2 mb-85">
                           <div className="postbox__author-thumb-3 mr-20">
                              <img src="assets/img/blog/author/blog-author-5.jpg" alt="" />
                           </div>
                           <div className="postbox__author-content">
                              <h4>Justin Case</h4>
                              <p>James Bond cheers barney the little rotter I do not want no agro gutted mate
                                 smashing cheeky pear shaped, mufty super.</p>
                           </div>
                        </div>*/}
                        <div className="postbox__recent mb-60">
                           <h4>Recent Posts</h4>

                           <div className="row">
                              {
                                 blogs.slice(4, 6).map((blog, index) => {
                                    return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="blog__single-2 white-bg mb-30">
                                          <div className="blog__thumb-2 w-img mb-20">
                                             <Link href="/blog-details">
                                                <a >
                                                   <img src={`/${blog.img}`} alt="" />
                                                </a>
                                             </Link>
                                          </div>
                                          <div className="blog__content-2">
                                             <div className="postbox__meta d-flex">
                                                <div className="postbox__tag-2">
                                                   <a href="#">Digital,</a>
                                                   <a href="#">Marketing. </a>
                                                </div>
                                                <div className="postbox__time">
                                                   <span>4 min read</span>
                                                </div>
                                             </div>
                                             <h3 className="blog__title-2">
                                                <Link href="/blog-details">
                                                   <a onClick={() => dispatch(specificBlog(blog.id))}>
                                                      {blog.title.substring(0, 41)}...</a>
                                                </Link>
                                             </h3>
                                             <p>Jeffrey arse over tit give us a bell old posh morish wellies cheeky.</p>
                                             <Link href="/blog-details">
                                                <a className="link-btn"><i className="fal fa-arrow-right"></i>read more</a>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 })
                              }


                           </div>
                        </div>
                        {/*<div className="latest-comments mb-55">
                           <h3 >2 Comments</h3>
                           <ul>
                              <li>
                                 <div className="comments-box grey-bg-2">
                                    <div className="comments-info d-flex">
                                       <div className="comments-avatar mr-15">
                                          <img src="assets/img/product/support/sup-1.jpg" alt="" />
                                       </div>
                                       <div className="avatar-name">
                                          <h5>Jason Response</h5>
                                          <span className="post-meta"> March 24, 2020 at 12:23 pm</span>
                                       </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                       <p>Up the duff a gosh cup of tea lemon squeezy bleeder victoria sponge haggle, cheers wellies bugger hotpot vagabond spiffing.!</p>
                                       <div className="comments-replay">
                                          <a href="#"><i className="fal fa-reply"></i>Reply</a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                              <li className="children">
                                 <div className="comments-box grey-bg-2">
                                    <div className="comments-info d-flex">
                                       <div className="comments-avatar mr-15">
                                          <img src="assets/img/product/support/sup-2.jpg" alt="" />
                                       </div>
                                       <div className="avatar-name">
                                          <h5>Hilary Ouse</h5>
                                          <span className="post-meta">April 06, 2021 at 06:19 pm </span>
                                       </div>
                                    </div>
                                    <div className="comments-text ml-65">
                                       <p>Nancy boy gutted mate smashing naff hanky panky grub down the pub  lost his bottle, cockup buggered.!</p>
                                       <div className="comments-replay">
                                          <a href="#"><i className="fal fa-reply"></i>Reply</a>
                                       </div>
                                    </div>
                                 </div>
                              </li>
                           </ul>
                        </div>*/}
                        <div className="comment__wrapper p-relative white-bg">
                           <div className="comment__shape">
                              <img className="circle" src="/assets/img/icon/sign/circle.png" alt="" />
                              <img className="zigzag" src="/assets/img/icon/sign/zigzag.png" alt="" />
                              <img className="dot" src="/assets/img/icon/sign/dot.png" alt="" />
                           </div>
                           <h3>Talk to us</h3>
                           <p>{"We look forward to hearing from you!"}</p>
                           <div className="comment__form mt-35">
                              <form action="#" onSubmit={sendEmail}>
                                 <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Full Name</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="Full name" />
                                             <i className="fal fa-user"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Work email</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="e-mail address" />
                                             <i className="fal fa-envelope"></i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Company Name</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="Company Name" />
                                             <i className="fal fa-smile"></i>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Website</h5>
                                          <div className="comment__input">
                                             <input required type="text" placeholder="Website" />
                                             <i className="fal fa-globe"></i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-xxl-12">
                                       <div className="comment__input-wrapper mb-25">
                                          <h5>Message</h5>
                                          <div className="comment__input textarea">
                                             <textarea required placeholder="Tell us about your project"></textarea>
                                             <i className="fal fa-comment"></i>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="row">
                                    <div className="col-xxl-12">
                                       <button type="submit" className="m-btn m-btn-4"> <span></span> submit </button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>

                  <BlogSideBar />

               </div>
            </div>
         </section>
         <Footer />
      </>
   );
};

export default BlogDetailsArea;