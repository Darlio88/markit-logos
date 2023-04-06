import Head from 'next/head';
import BannerArea from '../components/Home/BannerArea';
import Blog from '../components/Home/Blog';
import BrandArea from '../components/Home/BrandArea';
import CategoryArea from '../components/Home/CategoryArea';
import Cta from '../components/Home/Cta';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import HeroArea from '../components/Home/HeroAreaNew';
import Products from '../components/Home/Products';
import Subscribe from '../components/Home/Subscribe';
import Testimonial from '../components/Home/Testimonial';
//import TrendingLandmark from '../components/Home/TrendingLandmark';
import SEO from '../components/seo';
import AboutArea from '../components/About/AboutArea';
import ContactArea from '../components/Contact/ContactArea';
import ContactInfo from '../components/Contact/ContactInfo';
export default function Home() {

  return (
    <>
      <SEO pageTitle={'Welcome to Workazi'} />
      <Header />
      <HeroArea />
      <CategoryArea />
      <Subscribe />
      <Products />
      <Blog/>
      <Footer />
    </>
  )
}
