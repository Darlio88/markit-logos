import Link from "next/link";
import { useDispatch } from "react-redux";
//import { addToProduct, specificItem } from "../../redux/features/productSlice";
import ImagePage from "../support/ImagePage";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { addToProduct, specificItem } from '../../redux/features/productSlice';
import Product from "../../pages/product";

const SingleProduct = ({ product }) => {
   const { id, img,item, category, price, title } = product;
  const productsCategory = useSelector(state => state.products.allUniqueCategory);
  // dispaych
  const dispatch = useDispatch();
 
  // handleProducDetails
  const handleProducDetails = (id) => {
    dispatch(specificItem(id))
  }
 
  
   return (
      <>
   
         <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
            <div className="product__item  mb-30 wow fadeInUp" data-wow-delay=".3s">
               <div className="product__thumb">
                  <div className="product__thumb-inner fix w-img">.
                     <Link href='/product-details'>
                        <a>
                           <img src={img} alt="" />
                        </a>
                     </Link>
                  </div>
                  
                    <div  className="product__thumb-btn transition-3">
                    <Link href="/product-details">
                     <a onClick={() => handleProducDetails(item.id)} className="m-btn m-btn-7" >
                      View
                     </a>
                     </Link>
                     {/*<Link href="/product-details">
                              <a >{item?.title}...</a>
   </Link>*/}
                  </div>
               </div>
               {/*<div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                     <div className="product__tag">
                        <a href="#">{category}</a>
                     </div>*/}
                      {/*<div className="product__price">
                       <span>{`$${price}`}</span>
                           </div>
                  </div>*/}
                  {/*<h3 className="product__title">
                     <Link href='/ProductDetailsArea'>
                        <a >{title}..</a>
                     </Link>
                  </h3>               
                  </div>*/}
            </div>
            
              {/* <div className="product__content">
                  <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                     <div className="product__tag">
                        <a href="#">{category}</a>
                     </div>
                      /*<div className="product__price">
                       <span>{`$${price}`}</span>
                     </div>/
                  </div>
                  <h3 onClick={handleDetailsProduct} className="product__title">
                     <Link href='/ProductDetailsArea'>
                        <a >{title}..</a>
                     </Link>
                  </h3>
                  <p className="product__author">by <a href="#">Workazi</a>  <a href="#">Designers</a></p>
               </div>*/}
         </div>
            
      </>
   );
};

export default SingleProduct;