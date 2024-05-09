
import React,{ useState } from 'react';
import NavbarUser from "@/components/_App/NavbarUser";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import { Carousel } from 'react-bootstrap';



 
const homeUser = () => {
    const router = useRouter();
    const { locale } = router;
    const { id } = router.query;
    const [translations, setTranslations] = useState(null);
    

    React.useEffect(() => {
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }        

        const authToken = window.localStorage.getItem('auth_token');
        if (authToken === null) {
            router.push({pathname: '/login'});
        }

        fetchTranslations(); 
    },[id]);


    

    return (
        <>
            {translations ? (
                <>
                    <NavbarUser />
                    <div className="main">
                        <div className="cardBox">
                            <div className="container">
                                <div className="hosting-features-area pt-80 pb-50 bg-f9f6f6">
                                    <div className="container">
                                        <div className="section-title">
                                            <h2>Ads</h2>
                                            <div className="bar"></div>
                                        </div>      
                                        <Carousel>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://googiehost.com/blog/wp-content/uploads/2023/03/Forex-Trading-Platforms-A-Comprehensive-Guide-to-Popular-Choices.jpg"
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://d1krbhyfejrtpz.cloudfront.net/blog/wp-content/uploads/2022/07/07133628/Automated-Forex-Trading-Software-Development-A-Complete-Guide-4-1024x497.jpg"
                                                    alt="Second slide"
                                                />
                                            </Carousel.Item>
                                            {/* Add more Carousel.Items for additional images */}
                                        </Carousel> 
                                    </div>
                                </div>                                
                            </div>                            
                        </div>
                    </div>                                 
                </>
            ) : (
            ''
            )}
        </>
    )
}

export default homeUser;