import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';
import BlogSideBar from '../Blog/BlogSideBar';

const Blog = () => {
   const blogs = useSelector(state => state.blogs.blogs);
   const blogItem = useSelector(state => state.blogs.specificItem);
   //  dispatch
   const dispatch = useDispatch();
   return (
      <>

         {/*postbox__area  */}
            <div className="container">    
                    {/*here*/}
                       <div className="postbox__recent mb-60">
                       <h2 className="my_title">Our  Latest Blogs</h2>
                           <div className="row">
                              {
                                 blogs.slice(4, 6).map((blog, index) => {
                                    return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                       <div className="blog__single-2 mb-30">
                                          <div className="blog__thumb-2 w-img mb-20">
                                             <Link href="/blog-details">
                                                <a >
                                                   <img src={blog.img} alt="" />
                                                </a>
                                             </Link>
                                          </div>
                                          <div className="blog__content-2">
                                             <div className="postbox__meta d-flex">
                                                <div className="postbox__tag-2">
                                                   <a href="#">Website Development,</a>
                                                   <a href="#">Branding. </a>
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
                                             <p>{blog.desc.slice(0,64)}...</p>
                                             <Link href="/blog-details">
                                                <a className="link-btn"><i className="fal fa-arrow-right"></i>read more</a>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 })
                              }

                           <div className="category__more mt-30 text-center">
                            <Link href="/blog">
                              <a className="m-btn m-btn-2"> <span></span> View More...</a>
                            </Link>
                          </div>
                           </div>
                        </div>
                        
                  
            </div>
        
      </>
   );
};

export default Blog;