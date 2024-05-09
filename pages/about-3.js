import React , { useState , useEffect }from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import FeedbackStyleThree from '@/components/Common/FeedbackStyleThree';
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const About3 = () => {
    const router = useRouter();

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);

    useEffect(()=>{
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    },[]);

    return (
        <>
            <Navbar />

            <PageBanner pageTitle={translations ? (translations.form.aboutAs) : ('')} />

            <div className="agency-about-area ptb-80">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-img">
                                <img src="/images/agency-image/agency-about-img.jpg" alt="image" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                <span className="sub-title">{translations ? (translations.form.aboutAs) : ('')}</span>
                                    <h2>{translations ? (translations.form.wrProvide) : ('')}</h2>
                                <div className="bar"></div>

                                <p>{translations ? (translations.form.sourcesProvider) : ('')}</p>
                                <p>{translations ? (translations.form.Cryptocurrency) : ('')} </p>
                                <p>{translations ? (translations.form.forexTrade) : ('')}</p>
                                <p>{translations ? (translations.form.realEst) : ('')}</p>
                                <p>{translations ? (translations.form.photography) : ('')}</p>
                                <p>{translations ? (translations.form.eCommerce) : ('')}</p>
                                <p>{translations ? (translations.form.copywriting) : ('')}</p>


                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                           {/*  <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>{translations ? (translations.form.ourHistory) : ('')}</h3>
                                    <p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend et tiram.</p>
                                </div>
                            </div> */}

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="about-text">
                                    <h3>{translations ? (translations.form.ourMission) : ('')}</h3>
                                    <p>{translations ? (translations.form.FirstMission) : ('')}</p>
                                    <p>{translations ? (translations.form.secondMission) : ('')}</p>
                                    <p>{translations ? (translations.form.TherdMission) : ('')}</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="about-text">
                                
                                    <h3>{translations ? (translations.form.howWe) : ('')}</h3>
                                    <p>{translations ? (translations.form.forstPlat) : ('')}</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="about-text">
                                
                                    <h3>{translations ? (translations.form.whatServer) : ('')}</h3>
                                    <p>{translations ? (translations.form.service1) : ('')}</p>
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



           
            <FunFactsArea />
            
            <Footer />
        </>
    )
}

export default About3;