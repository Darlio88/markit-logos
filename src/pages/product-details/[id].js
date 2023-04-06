import React from 'react';
import {useRouter} from "next/router"
import {useSelector} from "react-redux"
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import ProductDetailsArea from '../../components/ProductDetails/ProductDetailsArea';
import ProductTitle from '../../components/ProductDetails/ProductTitle';
import SEO from '../../components/seo';


const ProductDetails = () => {
   const router = useRouter()
   const {id} = router.query;
   console.log(router)
   console.log(router.query)
   const product= useSelector(state=>state.products.products).find((item)=>item.id===id)
   
   return (
      <>
         <SEO pageTitle={'Product Details'} />
         <Header />
         {/* <seachbar/> */}
         <BgShape />
         <ProductTitle title={product?.title} category={product?.category} />
         <ProductDetailsArea />
         <Footer />
      </>
   );
};

export default ProductDetails;