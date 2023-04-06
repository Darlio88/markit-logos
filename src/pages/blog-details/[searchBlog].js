"use client"

import React, {useState, useEffect} from "react"
import Link from "next/link"
import Image from "next/image"
import {useRouter } from "next/router"
import {useSelector, useDispatch} from "react-redux"
import SEO from '../../components/seo';
import BgShape from '../../components/common/BgShape';
import Header from '../../components/Home/Header';
import Footer from '../../components/Home/Footer';

 const BlogList =() =>{
const route=useRouter()
const dispatch=useDispatch()
const {searchBlog} = route.query;

const blogs = useSelector(state=>state.blogs.blogs)
const regExp = new RegExp(searchBlog,"i");

const [filteredBlogs, setFilteredBlogs]= useState(blogs.filter(blog=>blog.title.match(regExp)!==null || blog.category.match(regExp)!==null!==-1))

useEffect(()=>{
    if(searchBlog) {
        let regExp=new RegExp(searchBlog,"i")
        setFilteredBlogs(blogs.filter(blog=>blog.title.match(regExp)!==null || blog.category.match(regExp)!==null))
    }
    
},[searchBlog])

    
    return (
    <>
    <SEO pageTitle={"blog list"}/>
    <Header />
    <BgShape />
       <section>
        <div className="container">
            <div className="postbox__recent mb-60">
                
                            <h4 style={{marginTop:"16px"}}>Search results</h4>
                            
                            <div className="row">
                                {
                                    filteredBlogs.map((blog, index) => {
                                        return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                        <div className="blog__single-2 white-bg mb-30">
                                            <div className="blog__thumb-2 w-img mb-20">
                                                <Link href="/blog-details">
                                                    <a >
                                                    {/* <img src={blog.img} alt="" /> */}
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
        </div>
       
       </section>
       <Footer />
    </>)
}

export default BlogList

