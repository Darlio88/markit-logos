import Link from 'next/link';
import Image from "next/image"
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BgShape from '../../components/common/BgShape';
import Pagination from '../../components/common/Pagination';
import BannerArea from '../../components/Home/BannerArea';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import Subscribe from '../../components/Home/Subscribe';
import ProductTrending from '../../components/Product/ProductTrending';
import SEO from '../../components/seo';
import { addToProduct, specificItem } from '../../redux/features/productSlice';

const Product = () => {
  const router = useRouter()
  console.log(router.query)
  const {s}= router.query
  // all products
  let products = useSelector(state => state.products.products);
  const productsCategory = useSelector(state => state.products.allUniqueCategory);
  // const [products, setProducts] = useState(useSelector(state => state.products.products));
  // const [filterProducts, setFilterProducts] = useState(useSelector(state => state.products.products));
  const [filterProducts, setFilterProducts] = useState(products);
  // const [uniqueTag, setUniqueTag] = useState(useSelector(state => state.products.allUniqueTag));
  const uniqueTag=useSelector(state=>state.products.products)
  const [checkbox, setCheckBox] = useState("");
  const [categoryTag, setCategoryTag] = useState('');
  // unique category

  // dispatch
  const dispatch = useDispatch();
  // currentpage
  const [currentPage, setCurrentPage] = useState(1);
  // product per page
  const [productPerPage, setProductPerPage] = useState(4);


  // index of last product
  const indexOfLastProduct = currentPage * productPerPage;
  // index of first product
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  // current products
  let currentProducts = filterProducts.slice(checkbox ? 0 : indexOfFirstProduct, checkbox ? filterProducts.length : indexOfLastProduct);
  // paginate

  const paginate = (number) => {
    setCurrentPage(number);
  };

//  useEffect(()=>{
//   setFilterProducts(products)
//  },[])

  // handleClick
  const handleClick = (product) => {
    dispatch(addToProduct(product))
  }
  // handleProducDetails
  const handleProducDetails = (id) => {
    dispatch(specificItem(id))
  }
  // handleCategory
  const handleCategory = (category) => {
    setCheckBox(category)
  }

  // handleTag
  const handleTag = (tag) => {
    setCheckBox(tag);
  }

  useEffect(()=>{
    let newProducts = checkbox.length>0?products.filter(product => product.category === checkbox):products;
    setFilterProducts(newProducts);
  },[checkbox]) 
  useEffect(()=>{
    if(s){
      let regExp = new RegExp(s,"i")
    let newProducts = s.length>0?products.filter(product => product.title.match(regExp) || product.category.match(regExp)):products;
    setFilterProducts(newProducts);
    console.log(newProducts)
    }
    console.log(products)
  },[s]) 

  return (
    <>
      <SEO pageTitle={'Product'} />
      {/*  Header start  */}
      <Header />
      {/* Header end */}

      {/*  bg shape area start  */}
      <BgShape />
      {/* bg shape area end */}

      <section className="product__area po-rel-z1 pt-100 pb-115 grey-bg">
        <div className="container">
          <div className="row">

            <div className="col-xxl-4 col-xl-4 col-lg-4 order-lg-first order-last">
              <div className="product__sidebar mr-30">
                <div className="product__sidebar-widget  white-bg mb-30">
                  <div className="sidebar__widget mb-20">
                  <form >
                      <div className="sidebar__widget-head d-flex align-items-center justify-content-between">
                        <h4 className="sidebar__widget-title">Category</h4>
                        <button type="submit" className="sidebar__clear-btn"><i className="fal fa-repeat"></i>Clear</button>
                      </div>
                      <div className="sidebar__widget-content">
                        <div className="sidebar__check-wrapper sidebar__tag">
                          <ul>
                            {
                              productsCategory.map((category, index) => {
                                return <li key={index} className="d-flex justify-content-between align-items-center">
                                  {category !== undefined && <>
                                    <div className="sidebar__check d-flex align-items-center">
                                      <span className='d-flex align-items-center'
                                        onClick={() => handleCategory(category)} >
                                        <input className="m-check-input" type="checkbox" readOnly
                                          checked={checkbox === category?true:false} />
                                        <label className="m-check-label">  {category} </label>
                                      </span>
                                    </div>
                                    {/* <span>76</span> */}
                                  </>
                                  }
                                </li>
                              })
                            }
                          </ul>

                        </div>
                      </div>
                    </form>
                  </div>
                  {/* <div className="sidebar__widget">
                  </div> */}
                </div>
              </div>
            </div>

            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="row">

                {
                  currentProducts.map((item, index) => {
                    return <div key={index} className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                      <div className="product__item white-bg mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div className="product__thumb">
                          <div className="product__thumb-inner fix w-img">
                            <Link href={`/product-details/${item.id}`}>
                              
                                {/* <img src={item?.img_big} alt="" /> */}
                                <img src={`/${item?.img_big}`} alt="" />
                                {/* <Image src={`/${item?.img_big}`} alt="" layout="fill"/> */}
                             
                            </Link>
                          </div>
                          <div className="product__thumb-btn transition-3">
                            
                            <a href={`/product-details/${item.id}`} className="m-btn m-btn-7">
                              {/* <Link href="/product-details"> */}
                              View
                              {/* </Link> */}
                            </a>
                            
                          </div>
                        </div>
                        <div className="product__content">
                          <div className="product__meta mb-10 d-flex justify-content-between align-items-center">
                            <div className="product__tag">
                              <a href="#">{item?.category}</a>
                            </div>
                          </div>
                          <h3 onClick={() => handleProducDetails(item.id)} className="product__title">
                            <Link href={`/product-details/${item.id}`}>
                              <a >{item?.title}...</a>
                            </Link>
                          </h3>
                          <p className="product__author">by <a href="#">Workazi</a></p>
                        </div>
                      </div>
                    </div>
                  })
                }


              </div>

              {!checkbox && <div className="row">
                <Pagination productPerPage={productPerPage} totalProduct={filterProducts.length}
                  paginate={paginate} currentPage={currentPage} />
              </div>}

            </div>
          </div>
        </div>
      </section>

      {/* footer start */}
      <Footer />
      {/* footer end */}
    </>
  );
};

export default Product;