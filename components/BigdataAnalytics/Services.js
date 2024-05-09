import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Services = () => {
    return (
        <>
            <div className="bigdata-services-area ptb-80 bg-eef6fd">
                <div className="container">
                    <div className="section-title">
                        <h2>Services We Can Help You With</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services-box-item">
                                <div className="icon">
                                    <img src="/images/bigdata-analytics/icon1.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Big Data Analysis
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </Link>

                                <div className="shape">
                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services-box-item">
                                <div className="icon">
                                    <img src="/images/bigdata-analytics/icon2.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Robust Analytics
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </Link>

                                <div className="shape">
                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services-box-item">
                                <div className="icon">
                                    <img src="/images/bigdata-analytics/icon3.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Marketing Analytics
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </Link>

                                <div className="shape">
                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services-box-item">
                                <div className="icon">
                                    <img src="/images/bigdata-analytics/icon4.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Data Visualization
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </Link>

                                <div className="shape">
                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services-box-item">
                                <div className="icon">
                                    <img src="/images/bigdata-analytics/icon5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Securities Research
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </Link>

                                <div className="shape">
                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="single-services-box-item">
                                <div className="icon">
                                    <img src="/images/bigdata-analytics/icon6.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        Data Governance
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut labore et dolore magna aliqua.</p>
                                
                                <Link href="/service-details" className="learn-more-btn">
                                    <Icon.ArrowRight /> Learn More
                                </Link>

                                <div className="shape">
                                    <img src="/images/bigdata-analytics/rectangle.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;  