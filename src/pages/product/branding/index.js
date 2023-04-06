import React, {useState} from "react"
import Link from "next/link"
import Image from "next/image"
// import computerPhoto from "../../../images/computer-design.png"
import computerPhoto from "../../../images/business-two.png"

import Header from "../../../components/Home/Header"
import SEO from "../../../components/seo"
import Footer from "../../../components/Home/Footer"
import Projects from "../../../components/Projects"
import Connect from "../../../components/Connect"

const list=[
    "It's not feasible for me to allocate time to solve this!",
    "We have exhausted all possible solutions but none have been effective!",
    "I believe our marketing funds are being used ineffectively!",
    "Our social media influence has decreased significantly.",
    "Our communication strategy is scattered and lacks coherence.",
    "I'm uncertain about how to make our brand stand out from competitors.",
    "I'm unable to find a way to surpass my competition.",
    "Our pricing strategy is inadequate.",
    "We are always engaged in price wars!",
    ]

const Branding =()=>{



    return (
        <div style={{display:"flex", flexDirection:"column"}}>
         <SEO pageTitle={"Branding"}/>
         <Header />
         {/* upper section containing service title */}
         <section className="branding__new__section-one">
            
            <div>
                <h4>Services</h4>
                <h1>Branding</h1>
                <div>
                <div className="separator"></div>
                <p>Establishing a strong brand is essential for the success of any company. <br/>
                Present yourself as the desired future state of your company.</p>
                </div>
            </div>
         </section>
         {/* section containing why branding is necessary */}
         <section className="branding__new__section-two" style={{background:"#FFFFFF"}}>
            {/* left */}
            <div>
                <h1>The struggle is real</h1>
                <h6>Are any of these recognizable to you?</h6>
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
         <section className="branding__new__section-three">
        {/* left containing an image*/}
        <div className="image__container">
        <Image src={computerPhoto}  height="400" width="500" alt="" />
        </div>
        {/* right */}
        <div>
            <h1>Your Most Valuable Asset</h1>
            <p>Your brand is the most valuable asset you own. Proper branding positions you as the authority in your market, attracts more of the right customers, creates customer loyalty and allows you to charge more while increasing sales volume.</p>
        </div>
         </section>
{/* section three content */}
         <section className="branding__new__section-four">
            {/* left */}
            <div>
                <h1>Creating a Strong Brand</h1>
                <p>Strong brands don't happen by accident. Creating a strong brand is both a science and an artform. It requires research, analytics and proven marketing methodologies coupled with creative thinking, artistic talent and design sensibilities.</p>
                <p>
                Whether you realize it or not, your brand is currently sending a message. Do you know what it is? Jeff Bezos said <quote> “Your brand is what people say about you when you're not in the room”.</quote> Do you know how people perceive you? Are you sure? If you don't control your brand's message, you leave it open for others to define and the message they create will define you.
                </p>
                <p>Branding is your opportunity to make customers feel the way you want them to feel about your business or product. It's what makes your product and business memorable, lovable, exciting, magical, etc. Strong branding makes you immediately associate a green, muscular arm with an exciting, heroic and iconic pop culture brand. This same arm in any other color would not have evoked the same association or feelings.</p>
            </div>
            {/* right side containing an image */}
            <div>
            <Image src={computerPhoto}  height="400" width="500" alt="" />
            </div>
             
         </section>

         {/* section four */}
         <section className="branding__new__section-five">
            {/* right side containing an image */}
         <div>
         <Image src={computerPhoto}  height="400" width="500" alt="" />
         </div>
         {/* left side */}
         <div>
            <h1>Your logo is your brand</h1>
            <p>
                Your Logo is Not Your Brand
                It's surprising how many people don't realize that their logo is NOT their brand. A brand goes far beyond its logo. A logo design might even change over time, but the brand itself should remain relatively unchanged. Your brand is the message and attributes of the personality of your business, product or service and the promise it makes and delivers to the customer.
                </p>
                <p>
                Even without a logo, a white and green paper coffee cup is instantly associated with the Starbucks brand. Moreover, the brand attributes they have carefully selected and intentionally earned are subconsciously identifiable by most of the world's population.
                </p>
                <p>
                Although your logo is not your brand, it plays a significant role in your brand as an identifier. As with other aspects of your branding and marketing, the logo itself should be developed following the guidelines set forth in your Brand Positioning & Strategy directives.
                </p>
         </div>         
         </section>
         <Projects category={"Branding"} />
         <Connect />
         <Footer />
        </div>
    )
}




export default Branding