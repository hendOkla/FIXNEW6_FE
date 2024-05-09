import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
 
const Services2 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services Style Two" />

            <div className="ml-services-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image1.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        IT Professionals
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image2.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Software Engineers
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image3.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Health & Manufacturing
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Security & Surveillance
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Automatic Optimization
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-ml-services-box">
                                <div className="image">
                                    <img src="/images/services-image/service-image6.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Data Analysts
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div> 
 
            <Footer />
        </>
    )
}

export default Services2;