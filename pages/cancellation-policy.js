import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const CancellationCondition = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Cancellation Policy" />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <h3>This Cancellation Policy was last updated on March 23, 2023.</h3>
                    <h3>For Live-Online and On-Demand training courses</h3>
                    <p>There are no refunds and/or cancellations available for Online Training, once on-demand access to the curriculum has been granted.</p>
                    <h3>For In-Person training courses</h3>
                    <p>If you would like to cancel your registration, a full refund must be requested in writing more than 30 days in advance. In the event that a student requests to cancel less than 30 days before the start date, there will be a 50% refund. If less than 10 days from the start date, there will be a 25% refund. In the event that NAPHN cancels or postpones a class, the student will be either refunded in full or rescheduled to a later class.</p>
                    <p>6Figure is not responsible for refunding any costs associated with travel or accommodation. We strongly recommend that, if traveling from out of state, you take out travel insurance to assist you in the event of a class cancellation.</p>
                    <p>6Figure reserves the right to use the contact information provided to communicate with the Purchaser and Attendees. We will not share your data with any third party without your consent.</p>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default CancellationCondition;