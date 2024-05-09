import React from 'react';
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";
import MainBanner from '@/components/DigitalAgencyPortfolio/MainBanner';
import WhatWeDo from '@/components/BigdataAnalytics/WhatWeDo';
import DiscoverArea from '@/components/BigdataAnalytics/DiscoverArea';
import Services from '@/components/BigdataAnalytics/Services';
import TeamStyleTwo from '@/components/Common/TeamStyleTwo';
import BigdataFunFacts from '@/components/BigdataAnalytics/BigdataFunFacts';
import Feedback from '@/components/BigdataAnalytics/Feedback';
import IndustriesWeServe from '@/components/BigdataAnalytics/IndustriesWeServe';
import BlogPost from '@/components/BigdataAnalytics/BlogPost';
import NewsletterStyleTwo from '@/components/Common/NewsletterStyleTwo';
import Footer from "@/components/_App/Footer";

const BigdataAnalytics = () => {
    return (
        <>
            <NavbarStyleSix />

            <MainBanner />

            <WhatWeDo />

            <DiscoverArea />

            <TeamStyleTwo />
            
            <IndustriesWeServe />

            <Feedback />

            


            
            <Footer />
        </>
    )
}

export default BigdataAnalytics;