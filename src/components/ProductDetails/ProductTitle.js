import Link from 'next/link';
import React from 'react';




const ProductTitle = ({title="Workazi Logo", category}) => {
    return (
   
        <section className="page__title-area  pt-85">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="page__title-content mb-50">
                        <h2 className="page__title">{title}</h2>
                        <nav aria-label="breadcrumb">
                              <ol className="breadcrumb">
                                 <li className="breadcrumb-item"><Link href="/home"><a >Home</a></Link></li>
                                 <li className="breadcrumb-item"><Link href={`/product/${category}`}><a >{category}</a></Link></li>
                                 <li className="breadcrumb-item active" aria-current="page">{title}</li>
                              </ol>
                           </nav>
                     </div>
                  </div>
               </div>
            </div>
         </section> 
    );
};

export default ProductTitle;