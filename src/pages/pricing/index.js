import React from 'react';
import BgShape from '../../components/common/BgShape';
import Footer from '../../components/Home/Footer';
import Header from '../../components/Home/Header';
import PricingArea from '../../components/Pricing/PricingArea';
import SEO from '../../components/seo';

const Pricing = () => {
    return (
        <>
            <SEO pageTitle={'Pricing'} />
            <Header />
            <BgShape />
            <PricingArea />
            <Footer />
        </>
    );
};

export default Pricing;