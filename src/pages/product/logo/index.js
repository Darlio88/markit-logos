import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image"
import computerPhoto from "../../../images/apple.png"
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

import {TfiEye} from "react-icons/tfi"
import {RiWechatLine} from "react-icons/ri"
import {AiOutlineEye} from "react-icons/ai"

import Header from "../../../components/Home/Header"
import SEO from "../../../components/seo"
import Footer from "../../../components/Home/Footer"
import Projects from "../../../components/Projects"
import Connect from "../../../components/Connect"
const list=[
    "I don't have the time to figure this out!",
"We've tried everything. Nothing works!",
"I feel like we're wasting marketing dollars!",
"Our social media presence has become nonexistent.",
"Our messaging is inconsistent and all over the place.",
"I'm not sure how to differentiate ourselves from our competitors.",
"I don't know how to beat my competition.",
"We're not able to charge what we should.",
"We're constantly battling on price!",
]

const sliders=[
    "/assets/img/slider.jpg",
    "/assets/img/slider-1.jpg",
    "/assets/img/slider-3.jpg",
    "/assets/img/slider-4.jpg",
    "/assets/img/slider.jpg",
    "/assets/img/slider-1.jpg",
    "/assets/img/slider-3.jpg",
    "/assets/img/slider-4.jpg"
]

const breakPoints={
    infinite: true,
    speed: 200,
    autoplay:true,
    duration:1000,
    speed:400,
    touchDisabled:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }


const Logo =()=>{



    return (
        <>
         <SEO pageTitle={"Logo Design"} />
         <Header />
         {/* upper section containing service title */}
         <section className="logo__new__section-one">
            
            <div>
                <h4>Services</h4>
                <h1>Logo Design</h1>
                <div>
                <div className="separator"></div>
                <p>A Logo is the key to every successful company. <br/>
                Position yourself as the company you want to be.</p>
                </div>
            </div>
         </section>
         {/* section containing why web is necessary */}
         <section className="logo__new__section-two" style={{background:"#FFFFFF"}}>
            {/* left */}
            <div>
                <h1>The challenge is significant.</h1>
                <h6>Do any of these sound familiar?</h6>
                <ol>
                    {list.map((item,idx)=><li key={idx}>{item}</li>)}
                </ol>
            </div>
        {/* right  containing an illustration*/}
        <div className="image__container">
        <Image src={computerPhoto}  height="400" width="500" alt="" />
        </div>
         </section>
{/* lower section containing vault */}
         <section className="logo__new__section-three">
        {/* left containing an image*/}
        <div className="image__container">
        <Image src={computerPhoto}  height="400" width="500" alt="" />
        </div>
        {/* right */}
        <div>
            <h1>Your Most Valuable Asset</h1>
            <p>Your Website is the most valuable asset you own. Proper web positions you as the authority in your market, attracts more of the right customers, creates customer loyalty and allows you to charge more while increasing sales volume.</p>
            <p>Your Website is the most valuable asset you own. Proper web positions you as the authority in your market, attracts more of the right customers, creates customer loyalty and allows you to charge more while increasing sales volume.</p>
            <p>Your Website is the most valuable asset you own. Proper web positions you as the authority in your market, attracts more of the right customers, creates customer loyalty and allows you to charge more while increasing sales volume.</p>
        </div>
         </section>
{/* section three content */}
         <section className="logo__new__section-four">
            {/* left */}
            <div>
                <h1>Creating a Beautiful Logo</h1>
                <p>Beautiful Logos don't happen by accident. Creating a beautiful logo is both a science and an artform. It requires research, analytics and proven marketing methodologies coupled with creative thinking, artistic talent and design sensibilities.</p>
                <p>
                Whether you realize it or not, your website is currently sending a message. Do you know what it is? Jeff Bezos said <quote> “Your website is what people say about you when you're not in the room”.</quote> Do you know how people perceive you? Are you sure? If you don't control your website's message, you leave it open for others to define and the message they create will define you.
                </p>
                <p>web is your opportunity to make customers feel the way you want them to feel about your business or product. It's what makes your product and business memorable, lovable, exciting, magical, etc. Strong web makes you immediately associate a green, muscular arm with an exciting, heroic and iconic pop culture brand. This same arm in any other color would not have evoked the same association or feelings.</p>
            </div>
            {/* right side containing an image */}
            <div>
            <Image src={computerPhoto}  height="400" width="500" alt="" />
            </div>
             
         </section>

         {/* section four */}
         <section className="logo__new__section-five">
            {/* right side containing an image */}
         <div>
         <Image src={computerPhoto}  height="400" width="500" alt="" />
         </div>
         {/* left side */}
         <div>
            <h1>Your Logo is your brand</h1>
            <p>
                Your Logo is Not Your Brand
                It's surprising how many people don't realize that their Logo is NOT their brand. A brand goes far beyond its logo. A logo design might even change over time, but the brand itself should remain relatively unchanged. Your brand is the message and attributes of the personality of your business, product or service and the promise it makes and delivers to the customer.
                </p>
                <p>
                Even without a Logo, a white and green paper coffee cup is instantly associated with the Starbucks brand. Moreover, the brand attributes they have carefully selected and intentionally earned are subconsciously identifiable by most of the world's population.
                </p>
                <p>
                Although your Logo is not your brand, it plays a significant role in your brand as an identifier. As with other aspects of your web and marketing, the logo itself should be developed following the guidelines set forth in your Brand Positioning & Strategy directives.
                </p>
         </div>

         
         
         </section>
         {/* projects will be displayed here */}
         <div className="row">
         <div className="col-xxl-12 col-xl-12 col-lg-12" style={{marginBottom:"1.25rem"}} >
               <h1 style={{textAlign:"center", marginTop:"1.25rem"}}>Logo Projects</h1>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12">
            <Slider {...breakPoints}>
            {
                sliders.map((item, idx)=><div key={idx}><Image  src={item} height="160" width="160"  alt=""/></div>)
            }
            </Slider>
            </div>
         </div>
         {/* call to action area */}
         <Connect />
         <Footer />
        </>
    )
}




export default Logo