import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import { useRouter } from 'next/router';
import * as Icon from 'react-feather';
import swal from 'sweetalert';
import Link from 'next/link';
import axios from 'axios';
import { getDictionary } from "getDictionary";

import MultiStep from 'react-multistep'
import { multiStepStyles } from '@/styles/multistepStyles';

import { Prepayment } from '@/components/Taps/Prepayment';
import { PaymentMethods } from '@/components/Taps/PaymentMethods';
import { Coupon } from '@/components/Taps/Coupon';
 
const Renew = () => {
    const router = useRouter();

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);

    

    
    useEffect(()=>{
        const authToken = window.localStorage.getItem('username');
        if (authToken === null) {
            router.push({pathname: '/login'});
        };
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    },[]);

    const signalParent = (data) => {
        // Handle the data passed from the child component
        console.log(data);
    };

    return (
        <> 
            <PageBanner pageTitle={translations ? (translations.form.renewal) : ('')}/>

            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form" style={{maxWidth:"100%"}}>
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" style={{width:'75px'}} />
                            </Link>
                            
                        </div>
                        <div>      
                            <MultiStep styles={multiStepStyles}>                                
                               {/*  <ChooseOption title='ChooseOption' signalParent={signalParent}/> */}
                                <Prepayment title='Prepayment' signalParent={signalParent}/>
                                <Coupon title='Use a coupon' signalParent={signalParent}/>
                                <PaymentMethods title='Payment Methods' signalParent={signalParent}/>
                                
                            </MultiStep>                                                                
                        </div>
                        <div className="foot">
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

export default Renew;
