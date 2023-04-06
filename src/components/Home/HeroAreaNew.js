import React  from 'react';
import { useState, useEffect, useRef} from 'react';
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import {useRouter } from "next/router"
import {useSelector} from "react-redux"
import Typewriter from 'typewriter-effect';

const heroImages=[
   //  "assets/img/hero/hero-small-three.png",
    "assets/img/hero/hero1.jpg",
    "assets/img/hero/hero15.jpg",
    "assets/img/hero/hero13.jpg",
   //  "assets/img/hero/hero14.jpg"
    
]

const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const HeroArea = () => {
   const router = useRouter()
   const form = useRef()
   const products = useSelector(state=>state.products.products)
   const [search, setSearch]= useState("")
   function handleSubmit(e){
      e.preventDefault()
      if(search.length<1) return;
      router.push(`product?s=${search}`)
   }

   return (
      <>
          <section 
          style={{position:"relative"}}
          className="hero__section-area hero__area hero__height grey-bg-3 d-flex align-items-center "
          >
            {/* <div className="hero__shape">
               <img className="circle" src="assets/img/icon/hero/hero-circle.png" alt="circle"/>
               <img className="circle-2" src="assets/img/icon/hero/hero-circle-2.png" alt="circle"/>
               <img className="square" src="assets/img/icon/hero/hero-square.png" alt="circle"/>
               <img className="square-2" src="assets/img/icon/hero/hero-square-2.png" alt="circle"/>
               <img className="dot" src="assets/img/icon/hero/hero-dot.png" alt="circle"/>
               <img className="triangle" src="assets/img/icon/hero/hero-triangle.png" alt="circle"/>
            </div> */}
            <div 
            className="container mb-5">
               <div className="row">
                  <div 
                  className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 col-sm-8">
                     <div
                     style={{borderRadius:".5rem"}} 
                     className="hero__content hero__added-card">
                        <h2 
                        className="hero__title">
                           <Typewriter
                                 options={{
                                    strings: ['<span>Our business is</span> <br/>to improve yours.',"<span>High-quality services,</span> <br/> no hourly rates."],
                                    autoStart: true,
                                    loop: true,
                                    
                                 }}
                           />
                        </h2>
                        {/* <Typewriter 
                        options={{
                           strings:[],
                           autoStart: true,
                           loop: true,
                        }}
                        /> */}
                        <div className="hero__search">

                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                     <div className="hero__thumb-wrapper scene ml-70 p-relative">
                        <div className="hero__thumb one d-none d-lg-block">
                           <img className="layer" data-depth="0.2" src="assets/img/hero/.jpg" alt=""/>
                        </div>
                        <div className="hero__thumb two d-none d-md-block">
                           <img className="layer" data-depth="0.3" src="assets/img/hero/hero-2.jpg" alt=""/>
                        </div>
                        <div className="hero__thumb three d-none d-md-block">
                           <img className="layer" data-depth="0.4" src="assets/img/hero/hero-3.jpg" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>  
            <div            
             style={{height:"100%", position:"absolute",zIndex:-100,right:0,left:0, top:0}}
>
          <Slider {...settings}>
          {
                heroImages.map((img, idx)=>(
                    <div key={idx} className="slider__hero" style={{width:"100%",height:"100%"}}>
                    <img src={img} className="hero__images" alt="" style={{width:"100%",height:"auto",objectFit:"cover"}}  />
                 </div> 
                ))
            }
          </Slider>
          </div>
         </section>
      </>
   );
};

export default HeroArea;