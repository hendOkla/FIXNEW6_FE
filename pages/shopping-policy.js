import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const ShoppingCondition = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Shopping Policy" />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <h3>This shopping Policy was last updated on March 23, 2023.</h3>

                    <p>Thank you for using the Online Shop (“6Figure Earner”). The Online Shop refers to the purchase and use of online courses and electronic materials (including but not limited to online courses, graphics, user interface, audio clips, video clips, editorial content, and the scripts and software) on the website https://6figure-earner.world/</p>
                    <p>The terms of this agreement governs the purchase and usage of Online Shop of Live Your Mark Pte Ltd (“LYM”).</p>
                    <p>Your use of the Online Shop requires that you agree to the following terms. Please read them carefully. If you do not understand the Terms, or do not accept any part of them, then you should not use the Online Shop.</p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default ShoppingCondition;