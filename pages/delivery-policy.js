import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const DeliveryPolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Delivery Policy" />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <h3>This Delivery Policy was last updated on March 23, 2023.</h3>
                    <p>This delivery policy (or shipping policy) is meant to serve either as (i) guidance for customers so that they have a general idea of when to expect delivery of their goods, or (ii) a legally-binding contract placing obligations on the seller. It explains what the customer should do in the event of any issues with the delivery, including non-delivery and loss.</p>
                    <p>Customers will be interested in any free delivery criteria, which should be clearly stated if you do offer free delivery. It is important that you explain the limits to your geographical delivery areas. This should deter prospective customers in countries outside of your selected regions from attempting to place an order. You may also be able to configure the order section of your website to prevent them from doing so.</p>
                    <p>Delivery charges must be clearly stated so that customers are fully informed of what the total cost of the purchase will be. You should consider whether it makes financial sense to track deliveries and have customers sign for them, rather than use the standard post and hope for the best. The value of the goods or their scarcity may be determining factors in that regard. If the customer denies having received the goods and there is no evidence of delivery, you may have to absorb the loss and re-do the order.</p>
                    <p>It is a good commercial strategy to have a clear delivery policy so that customers are not left wondering what happens next. If customers have no idea when to expect delivery they may resort to phoning and emailing you, using up your valuable resources. The absence of a clear delivery policy may also deter prospective customers from placing orders for goods.</p>
                    <p>The wording of the policy is purposely more friendly to the business owner than the customer in that it allows for flexibility with times and dates. However, if the policy is to be treated as part of the contract of sale and you fail to abide by the terms, you face the risk of a claim for breach of contract. You could find yourself in a situation where a customer claims that you breached the contract for some minor reason such as late delivery, even though they suffered no real loss.</p>
                    <p>If the policy is to be used for guidance purposes it will carry less legal weight in respect of delivery times and dates.</p>
                   
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default DeliveryPolicy;