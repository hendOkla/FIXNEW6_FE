import React from 'react';
import * as Icon from 'react-feather';

const AboutUsContent = () => {
    return (
        <>
            <div className="repair-about-area ptb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="repair-about-content">
                                <span className="sub-title"></span>
                                <h2>We Seek To Provide Different Sources Of Education Through The Internet And Reality</h2>
                                <p>The sources we provide :</p>

                                <ul>
                                    <li><span><Icon.Check /> Internet marketing services</span></li>
                                    <li><span><Icon.Check /> Self development</span></li>
                                    <li><span><Icon.Check /> Real estate in dubai</span></li>
                                    <li><span><Icon.Check /> Photography</span></li>
                                    <li><span><Icon.Check /> E-Commerce</span></li>
                                    <li><span><Icon.Check /> Copywriting</span></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="repair-about-image">
                                <img 
                                    src='/images/about1.jpg'
                                    className="animate__animated animate__fadeInDown" 
                                    alt="image" 
                                    style={{width:"250px"}}
                                />
                            
                                <img 
                                    src='/images/about2.jpg'
                                    className="animate__animated animate__zoomIn" 
                                    alt="image" 
                                />
                        
                                <img 
                                    src='/images/about3.jpg'
                                    className="animate__animated animate__fadeInUp" 
                                    alt="image" 
                                    style={{width:"250px"}}
                                />
                            
                                <img 
                                    src='/images/about-shape1.png'
                                    alt="image" 
                                />

                                <img 
                                    src='/images/about-shape2.png'
                                    alt="image" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUsContent;
