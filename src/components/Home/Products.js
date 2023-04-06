import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import SingleProduct from './SingleProduct';
import ProductTrending from '../Product/ProductTrending';

const Products = () => {
   const products = useSelector((state) => state.products.products);
   return (
      <>
         <section className="product__area pt-105 pb-110 grey-bg-2" id='products'>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title" id = "products">Our Portifolio</h2>
                        <p>From multipurpose project to simple and Incredible items</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {/* Product trending*/}
                  <ProductTrending/>

                  {/*
                  products.slice(9,15).map((product, index) => {
                        return <SingleProduct key={index} product={product} />
                     })
                  */}
                  
               </div>

               <div className="row" style={{marginBottom:"1.5rem"}}>
                  <div className="col-xxl-12">
                    <div className="product__more text-center mt-30">
                        <Link href="/product"><a  className="m-btn m-btn-2"> <span></span> More of Our Work...</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Products;