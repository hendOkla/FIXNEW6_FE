import React , {useState , useEffect} from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
 
const Services1 = () => {
    const router = useRouter();
    const { locale } = router;
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

            <PageBanner pageTitle="" />

            <div className="services-area-two pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="section-title">
                        <h2>{translations ? (translations.form.OurService) : ('')} </h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                    <img src='/images/services/service-1.png'/>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    {translations ? (translations.form.dictionaryA) : ('')} 
                                    </Link>
                                </h3>
                                <p>{translations ? (translations.form.dictionaryTitle) : ('')} </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                <img src='/images/services/service-2.png'/>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    {translations ? (translations.form.university) : ('')} 
                                    </Link>
                                </h3>
                                <p>{translations ? (translations.form.universityTitle) : ('')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                <img src='/images/services/service-3.png'/>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    {translations ? (translations.form.streaming) : ('')} 
                                    </Link>
                                </h3>
                                <p>{translations ? (translations.form.streamingTitle) : ('')}</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                <img src='/images/services/service-4.png'/>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    {translations ? (translations.form.cyborg) : ('')} 
                                    </Link>
                                </h3>
                                <p>{translations ? (translations.form.cyborgTitle) : ('')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                <img src='/images/services/service-5.png'/>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    1P%
                                    </Link>
                                </h3>
                                <p>{translations ? (translations.form.PTitle) : ('')}</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c679e3">
                                <img src='/images/services/service-6.png'/>
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                    {translations ? (translations.form.alpha_fx) : ('')} 
                                    </Link>
                                </h3>
                                <p>{translations ? (translations.form.alpha_fxTitle) : ('')} </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Services1;