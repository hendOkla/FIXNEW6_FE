import React,{ useState, useEffect } from 'react';
import NavbarUser  from "@/components/_App/NavbarUser";
import { useRouter } from 'next/router';
import { getDictionary } from "getDictionary";
import axios from "axios";

const books = () => {
    const router = useRouter();
    const { course_id } = router.query;

    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);    
    const [bookInput,  setBook] = useState({});
    
    useEffect(()=>{
        
        const courseID = localStorage.getItem('course_idBook');
        console.log(courseID);
        axios.get(`/api/getBookCourse/${courseID}`).then(res=>{
            if(res.data.status === 200){
                setBook(res.data.book);
                console.log(res.data.book);

                
            }
        });
        
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();   
    },[course_id]);

    

    

    return (
        <>
            {translations ? (
                <>
                    <div>
                        <NavbarUser/>

                        <div className="main">
                            <div className="cardBox">
                                <div className="container">
                                    
                                    <div className="team-area pt-80 pb-50 bg-f9f6f6">
                                        <div className="container">
                                            <div className="section-title">
                                                <h2> </h2>
                                                <div className="bar"></div>
                                            </div>
                                            <div className="row justify-content-center">
                                                
                                                
                                            </div>
                                        </div>
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
       
    );
}

export default books;