import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import * as Icon from 'react-feather';
import { getDictionary } from "getDictionary";

const ExpSub = () => {
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
				      <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" style={{width:'25%'}} />
                            </Link>
                            <h3>EXPIRED MEMBERSHIP NOTICE</h3>
                            <span>Your membership has expired. You will need to renew your subscription to regain access.</span>
                        </div>

                        <div>
                            <div className="mb-3">
                                <h5>IMPORTANT</h5>                                
                            </div>
                            <div className="mb-3">
                                <div className="others-option">
                                    <Link href="/renew/" className="btn btn-primary">
                                    Renew
                                    </Link>
                                </div>                                
                            </div>

                            <div className="mb-3">
                                <p>If you wish to cancel your subscription completely, please email 6figure-earner@6figure-earner.com and let us know that you would like to cancel your membership. If you are seeing this message and do not plan on renewing your subscription, you must fully cancel your subscription by emailing 6figure-earner@6figure-earner.com before we can process and pay your final commission payment.</p>                                
                            </div>
                        </div>
                        <div className="foot">
                            <p></p>
                            <ul>
                                <li>
                                    <a href="https://www.mail.com/" target="_blank">
                                        <Icon.Mail />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
			</>
    )
}

export default ExpSub