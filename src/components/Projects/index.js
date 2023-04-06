"use client"
import Link from 'next/link';
import Image from "next/image"
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BgShape from '../../components/common/BgShape';
import Pagination from '../../components/common/Pagination';
import BannerArea from '../../components/Home/BannerArea';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Subscribe from '../../components/Home/Subscribe';
import ProductTrending from '../../components/Product/ProductTrending';
import SEO from '../../components/seo';
import { addToProduct, specificItem } from '../../redux/features/productSlice';


//new components
import DescriptionHeader from "../../components/Description/DescriptionHeader"
import DescriptionArea from "../../components/Description/DescriptionArea"
import {services} from "../../data/servicesData.js"



const Projects=({category})=>{
    let products = useSelector(state => state.products.products);
    console.log(products, category)
    const [filterProducts, setFilterProducts] = useState(products.filter((item)=>item.category==category));
    console.log(filterProducts)
    
  const [currentPage, setCurrentPage] = useState(1);
  // product per page
  const [productPerPage, setProductPerPage] = useState(4);
  // index of last product
  const indexOfLastProduct = currentPage * productPerPage;
  // index of first product
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  // current products
  // paginate
  const paginate = (number) => {
    setCurrentPage(number);
  };
 
  useEffect(() => {
    let filtered=products.filter(item=>item.category===category)
    setFilterProducts(filtered)
  }, [category])
  

    return (
        <section className="product__area po-rel-z1 pt-100 pb-115 grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12" style={{marginBottom:"1.25rem"}} >
               <h1 style={{textAlign:"center"}}>{`${category} Projects`}</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="row">

                {
                  filterProducts.map((item, index) => {
                    return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="product__thumb">
                          <div className="product__thumb-inner fix w-img">
                            <Link href={`/product-details/${item.id}`}>
                              
                                <img src={`/${item?.img_big}`} alt="" />
                             
                            </Link>
                          </div>
                          <div className="product__thumb-btn transition-3">
                            
                            <a href={`/product-details/${item.id}`} className="m-btn m-btn-7">
                              {/* <Link href="/product-details"> */}
                              View
                              {/* </Link> */}
                            </a>
                            
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                            <div className="product__tag">
                              <a href="#">{item?.category}</a>
                            </div>
                          </div>
                          <h3 onClick={() => handleProducDetails(item.id)} className="product__title">
                            <Link href={`/product-details/${item.id}`}>
                              <a >{item?.title}...</a>
                            </Link>
                          </h3>
                          <p className="product__author">by <a href="#">Workazi</a></p>
                        </div>
                      </div>
                    </div>
                  })
                }


              </div>

              {<div className="row">
                <Pagination productPerPage={productPerPage} totalProduct={filterProducts.length}
                  paginate={paginate} currentPage={currentPage} />
              </div>}

            </div>
          </div>
        </div>
      </section>
    )
}

export default Projects