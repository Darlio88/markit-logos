import React from 'react'
import {TfiEye} from "react-icons/tfi"
import {RiWechatLine} from "react-icons/ri"
import {AiOutlineEye} from "react-icons/ai"
import {useRouter} from "next/router"

function index() {
  const route=useRouter()
  return (
    <section className="web__new__section-call container">
      <div className='row' >
      <div className="connect__card col-xxl-6 col-xl-6 col-lg-6 col-md-6" onClick={()=>route.push("/#categoryArea")}>
        <div>
          <TfiEye size={64} color="red" />
          {/* <AiOutlineEye/> */}
          <h1>See Our Services</h1>
          <p>Let us take your brand further</p>
        </div>
    </div>
    <div className="connect__card col-xxl-6 col-xl-6 col-lg-6 col-md-6"  onClick={()=>route.push("/contact")}>
        <div>
        <RiWechatLine size={64} color="green"/>
        <h1>Describe Your Project</h1>
        <p>Let us take your brand further</p>
        </div>
    </div>
      </div>
     </section>
  )
}

export default index