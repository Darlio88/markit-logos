import React from "react"
import Image from "next/image"

//imported image
import webDesign from "../../images/computer-design.png"
import {services} from "../../data/servicesData.js"

const DescriptionArea =({service})=>{

    return(
        <section className="description__area-top grey-bg">
            <div className="container pt-20">
            <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-5">
             <Image src={webDesign} alt=""  />
            </div>
            <div  className="col-xxl-6 col-xl-6 col-lg-6 text-wrap mb-5">
            <h1 style={{marginBottom:"1rem"}}>{service?.name}</h1>
            <p>{service?.desc_long}</p>
            </div>
            </div>
            </div>

        </section>
    )
}

export default DescriptionArea