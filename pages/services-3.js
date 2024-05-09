import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
 
const Services3 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Services Style Three" />

            <div className="solutions-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Robotic Automation
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Cognitive Automation
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon6.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Cognitive Engagement
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon7.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Security & Surveillance
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon6.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Automatic Optimization
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon7.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Data Analysts
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon5.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Health & Manufacturing
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon4.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        Software Engineers
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.PlusCircle /> Learn More
                                </Link>
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
                <div className="shape6 rotateme">
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

export default Services3;