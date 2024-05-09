import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const OurServices = () => {
    return (
        <>
            <div className="agency-services-area pt-80 pb-50">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Our Solutions</span>
                        <h2>Our Services</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img1.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/service-details">
                                            IT Professionals
                                        </Link>
                                    </h3>

                                    <Link href="/service-details" className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img2.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/service-details">
                                            Software Engineers
                                        </Link>
                                    </h3>

                                    <Link href="/service-details" className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/agency-services-img3.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/service-details">
                                            Web Development
                                        </Link>
                                    </h3>

                                    <Link href="/service-details" className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/agency-services-img4.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/service-details">
                                            SEO & Content
                                        </Link>
                                    </h3>

                                    <Link href="/service-details" className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                            <img src="/images/agency-image/agency-services-img5.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/service-details">
                                            Digital Marketing
                                        </Link>
                                    </h3>

                                    <Link href="/service-details" className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="agency-services-box">
                                <img src="/images/agency-image/agency-services-img6.jpg" alt="image" />

                                <div className="content">
                                    <h3>
                                        <Link href="/service-details">
                                            Data Analysts
                                        </Link>
                                    </h3>

                                    <Link href="/service-details" className="read-more-btn">
                                        Read More <Icon.PlusCircle />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
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
        </>
    );
}

export default OurServices;