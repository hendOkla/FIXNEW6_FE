import React from 'react';
import Navbar from "@/components/_App/Navbar";
import MainBanner from '@/components/PCRepair/MainBanner';
import AboutUsContent from '@/components/PCRepair/AboutUsContent';
import Services from '@/components/PCRepair/Services';
import CTA from '@/components/PCRepair/CTA';
import FunFactsArea from '@/components/Common/FunFactsArea';
import Team from '@/components/PCRepair/Team';
import Feedback from '@/components/Common/Feedback';
import WhyChoose from '@/components/PCRepair/WhyChoose';
import BlogPost from '@/components/Common/BlogPost';
import Footer from "@/components/_App/Footer";

const PCRepair = () => {
    return (
        <>
            <Navbar />

            <MainBanner />

            <AboutUsContent />

            <CTA />

            <Team />

            <Feedback />

            <Footer />
        </>
    )
}

export default PCRepair;