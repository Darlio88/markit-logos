import Link from 'next/link';
import {useRouter} from "next/router"
import React,{useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificBlog } from '../../redux/features/blogSlice';

//icons
import {BsSearch} from "react-icons/bs"

const BlogSideBar = () => {
   const sidebarBlogs = useSelector(state => state.blogs.blogs);
   const [searchTerm, setSearchTerm]=useState()
   const router = useRouter()
   const dispatch = useDispatch();
   function handleSubmit(e){
      e.preventDefault()
      if(searchTerm.length<1) return;
      let route= router.asPath
      router.push(`${route}/${searchTerm}`)
   }
   return (
      <>
         <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div className="blog__sidebar-wrapper  ml-30">
               <div className="blog__sidebar mb-30">
                  <div className="sidebar__widget mb-30">
                     <div className="sidebar__widget-content">
                        <div className="sidebar__search-wrapper">
                           <form  onSubmit={handleSubmit}>
                              <input type="text" placeholder="Search ..." value={searchTerm} 
                              onChange={e=>setSearchTerm(e.target.value)} />
                              <button type="submit"><BsSearch /></button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="sidebar__widget mb-30">
                     <div className="sidebar__widget-title" style={{paddingTop:"1.25rem"}}>
                        <h3>Recent News</h3>
                     </div>
                     <div className="sidebar__widget-content">
                        <div className="rc__post-wrapper">

                           {
                              sidebarBlogs.slice(1, 4).map(blog => {
                                 return <div key={blog.id} className="rc__post d-flex align-items-center">
                                    <div className="rc__thumb mr-15" onClick={()=> dispatch(specificBlog(blog.id))}>
                                       <Link href="/blog-details">
                                          <a ><img src={`/${blog.sm_img}`} alt="" /></a>
                                       </Link>
                                    </div>
                                    <div className="rc__content">
                                       <div className="rc__meta">
                                          <span>{blog.date}</span>
                                       </div>
                                       <h6 className="rc__title" onClick={()=> dispatch(specificBlog(blog.id))}>
                                          <Link href="/blog-details">
                                             <a >{blog.title.substring(0,40)}...</a>
                                          </Link>
                                       </h6>
                                    </div>
                                 </div>
                              })
                           }


                        </div>
                     </div>
                  </div>
                  <div className="sidebar__widget mb-30">
                     <div className="sidebar__widget-title mt-20">
                        <h3>Categories</h3>
                     </div>
                     <div className="bg-gray text-wrap flex-wrap" style={{display:"flex",flexDirection:"row", gap:"0.5rem", justifyContent:"center", fontSize:"0.8rem", fontWeight:400}}>
                        <p>Logo Design</p>
                        <p>Brochures</p>
                        <p>Flyer Design</p>
                     </div>
                  </div>
               </div>
              {/* <div className="sidebar__banner" style={{ background: `url(assets/img/banner/sidebar-banner.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <h4 className="sidebar__banner-title">Check Out <br />Our free Templates</h4>
                  <Link href="/product"><a className="m-btn m-btn-white"> <span></span> free template</a></Link>
               </div>*/}
            </div>
         </div>
      </>
   );
};

export default BlogSideBar;