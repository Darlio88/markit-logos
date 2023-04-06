import React from 'react'
import Link from 'next/link'

const searchbar = () => {
  return (
   <>
    <div className="hero__search">
    <form action="./product">
       <div className="hero__search-inner d-xl-flex">
          <div className="hero__search-input">
             <span><i className="far fa-search"></i></span>
             <input type="text" placeholder="Search for Projects"/>
          </div>
          <button type="submit" className="m-btn ml-20"> <span></span>search</button>
       </div>
    </form>
 </div>
 </>
  )
}

export default searchbar;