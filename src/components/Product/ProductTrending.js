import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { specificItem } from '../../redux/features/productSlice';

const ProductTrending = () => {
   const productTrending = useSelector(state => state.products.products);
   const dispatch = useDispatch();
   return (
      <>
         <section className="trending__area pt-110 pb-110">
            <div className="container">
               <div className="row">
                  {
                     productTrending.slice(9, 15).map((product, index) => {
                        return <div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                           <div className="product__item  mb-30 wow fadeInUp" data-wow-delay=".3s">
                            <div className="product__thumb">
                              <div  className="product__thumb-btn transition-3">
                                <Link href="/product">
                                  <a onClick={()=> dispatch(specificItem(product.id))} className="m-btn m-btn-7" >
                                       View
                                  </a>
                                </Link>
                              </div>
                                 <div className="product__thumb-inner fix w-img" onClick={()=> dispatch(specificItem(product.id))}>
                                    <Link href="/product">
                                       <a >
                                          <img src={product?.img} alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              {/*<div className="product__content">
                                 <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                                    <a href="#">{product?.category}</a>
                                 </div>
                                 <h3 onClick={()=> dispatch(specificItem(product.id))} className="trending__title trending__title-2">
                                    {/* <Link href="/product-details"> <a >{product?.title}</a></Link> /}
                                    <Link href="/product-details">{product?.title}</Link>
                                 </h3>
                              </div>*/}
                           </div>
                        </div>
                     })
                  }

               </div>
            </div>
         </section>
      </>
   );
};

export default ProductTrending;