import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
 
const PrivacyPolicy = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Privacy Policy" />

            <div className="main-text-area ptb-80">
                <div className="container">
                    <h3>This Privacy Policy was last updated on March 23, 2023.</h3>
                    <p>Thank you for joining 6Figure. We at 6Figure (“6Figure ”, “we”, “us”) respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights regarding your personal data.</p>
                    <p>Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use 6Figure websites, mobile applications, APIs, or related services (the “Services”). It also applies to prospective customers of our business and enterprise products.</p>
                    <p>By using the Services, you agree to the terms of this Privacy Policy. You shouldn’t use the Services if you don’t agree with this Privacy Policy or any other agreement that governs your use of the Services.</p>
                    <h3>What Data We Get</h3>
                    <p>We collect certain data from you directly, like information you enter yourself, data about your consumption of content, and data from third-party platforms you connect with 6Figure. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using. All data listed in this section is subject to the following processing activities: collecting, recording, structuring, storing, altering, retrieving, encrypting, pseudonymizing, erasing, combining, and transmitting.</p>
                    <h3>Data From Third Parties</h3>
                    <p>If you are a 6Figure Business enterprise or corporate prospect, in addition to information you submit to us, we may collect certain business contact information from third-party commercial sources</p>
                    <h3>Security</h3>
                    <p>We use appropriate security based on the type and sensitivity of data being stored. As with any internet-enabled system, there is always a risk of unauthorized access, so it’s important to protect your password and to contact us if you suspect any unauthorized access to your account.</p>

                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default PrivacyPolicy;