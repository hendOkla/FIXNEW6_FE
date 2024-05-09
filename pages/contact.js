import React,{ useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactInfo from '@/components/Contact/ContactInfo';
import ContactForm from '@/components/Contact/ContactForm';
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';

const Contact = () => {
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

            <PageBanner pageTitle={translations ? (translations.form.contact) : ('')} />

            <ContactInfo />

            <ContactForm />
           
            <Footer />
        </>
    )
}

export default Contact;