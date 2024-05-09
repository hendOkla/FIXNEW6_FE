import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const RefundPolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Refund Policy" />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <h3>This Refund Policy was last updated on March 23, 2023.</h3>
                    <h3>Refunds</h3>
                    <p>All sales are final and no refund will be is issued.</p>
                    <h3>Questions</h3>
                    <p>If you have any Questions concerning out return policy, Pleas contact us at:</p>
                    <p>+971545565988</p>
                    <p>6figure-earner@6figure-earner.com</p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default RefundPolicy;