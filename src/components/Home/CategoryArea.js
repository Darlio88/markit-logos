import Link from "next/link";
import React, { useState } from 'react';
import Slider from 'react-slick';
import App from "next/app";
// const settings = {
//    dots: true,
//    infinite: true,
//    speed: 500,
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    initialSlide: 0,
//    autoplay:true,
//    nextArrow:<NextArrow />,
//    prevArrow:<PrevArrow />,
//    responsive: [
//      {
//        breakpoint: 1024,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2,
//          infinite: true,
//          dots: true,
//        },
//      },
//      {
//        breakpoint: 600,
//        settings: {
//          slidesToShow: 2,
//          slidesToScroll: 2,
//          initialSlide: 2,
//        },
//      },
//      {
//        breakpoint: 480,
//        settings: {
//          slidesToShow: 1,
//          slidesToScroll: 1,
//        },
//      },
//    ],
//  };
const categoryData = [
   {
      id: 1,
      img: 'assets/img/icon/catagory/website.jpg',
      title: 'Website Design',
      desc:"Customise your website with Us",
      url:"web-design"
   },
   {
      id: 3,
      img: 'assets/img/icon/catagory/logo.jpg',
      title: 'Logo Design',
      desc:"Build your Brand",
      url:"logo"
   },
   {
      id: 4,
      img: 'assets/img/icon/catagory/brochures.jpg',
      title: 'Brochures',
      desc:"Setup your business with brochures",
      url:"brochures"
   },
   {
      id: 5,
      img: 'assets/img/icon/catagory/flyers.jpg',
      title: 'Flyers Design',
      desc:"Advertise your business with custom flyers",
      url:"flyers"
   },
   {
      id: 6,
      img: 'assets/img/icon/catagory/branding.jpg',
      title: 'Branding',
      desc:"Customise your website with Us",
      url:"branding"
   },
]



const CategoryArea = () => {
   return (
      <>
         <section 
         className="category__area pt-105 pb-135" id="CategoryArea">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper text-center mb-60">
                        <h2 className="section__title"  >Our services</h2>
                        <p>The goal of this event is to bring leaders in information technology together from across the globe.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                  categoryData.map((category, idx)=>(
                     <div key={idx} className="col-xxl-2.5 col-xl-2.5 col-md-4 col-sm-4">
                     <div className="category__item text-center mb-30 ml-10 mr-10 mt-20 wow transition-3" data-wow-delay=".3s" >
                        <div className="category__icon mb-2">
                           <a href={`./product/${category.url}`}><img src={category.img} alt={category.title} /></a>
                        </div>
                        <div className="category__content">
                           <h3 className="category__title">
                              {/**/} <Link href={`./product/${category.url}`}><a>{category.title}</a></Link>
                           </h3>
                           <p>
                           {category.desc}
                           </p>
                           <Link href="">
                              <a className="link-btn">
                              <i className="far fa-long-arrow-right"></i>
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
                  ))
                  }
               </div>
               {/* </div> */}
               {/*<div className="row">
                  <div className="col-xxl-12">
                     <div className="category__more mt-30 text-center">
                        <Link href="/product">
                           <a className="m-btn m-btn-2"> <span></span> View all categories</a>
                        </Link>
                     </div>
                  </div>
               </div>*/}
            </div>
         </section>
      </>
   );
};

export default CategoryArea;

// function NextArrow(props){
//    const { className, style, onClick } = props;
//    return (
//      <div
//        className={className}
//        style={{ ...style,  display: "flex", justifyContent:"center", alignItems:"center", padding:".5rem", background: "#20c997", borderRadius:"50%"}}
//        onClick={onClick}
//      />
//    )
// }
// function PrevArrow(props){
//    const { className, style, onClick } = props;
//    return (
//      <div
//        className={className}
//        style={{ ...style,  display: "flex", justifyContent:"center", alignItems:"center", padding:".6rem", background: "#20c997", borderRadius:"50%"}}
//        onClick={onClick}
//      />
//    )
// }