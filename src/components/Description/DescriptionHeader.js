import React from "react"



const Description =({service})=>{
    
    return (
       <section className="description__container grey-bg">
        <div class="container">
            <div class="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12 text-wrap">
                    <h2 style={{lineHeight:1.25,fontWeight:700}}>{service?.name}</h2>
                     {/* <p style={{paddingTop:"0.8rem"}}>Turn visitors into customers.<br /> Let's make your brand come to life online, <br />providing a welcoming first impression and effective user experience.</p> */}
                    <p style={{paddingTop:"0.8rem"}}>{service?.desc_short.split("\n").map(item=>`${item}`)}</p>

                </div>
            </div>
        </div>
       </section> 
    )
}

export default Description;