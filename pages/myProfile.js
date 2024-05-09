import React,{ useState } from 'react';
import NavbarUser from "@/components/_App/NavbarUser";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from "axios";



 
const myProfile = () => {
    const router = useRouter();
    const { locale } = router;
    const { id } = router.query;
    const { cat } = router.query;    
    const [curseList,setCurseList] = useState([]);    
    const [translations, setTranslations] = useState(null);

    const [CustomerInput,  setCustomer] = useState({
        username:'',
        lname:'',
        fname:'',
        email:'',
        link:'',
        password:'',
        confPassword:'',
        status:'',
    });
    

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
        const id =localStorage.getItem('id');
        axios.get(`/api/edit-customer/${id}`).then(res=>{
            if(res.data.status===200){
                setCustomer(res.data.customer);
            }
        })
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
                                            <h2>My Profile</h2>
                                            <div className="bar"></div>
                                        </div>

                                        <div className="row">
                                            <div className="auth-form">
                                                <div className="auth-head">
                                                    <Link href="/it-startup">
                                                    <img src={`https://6figure-earner.com/LarReApi/public/${CustomerInput.image}`} alt='not uploaded image for user ' width='100px' height='100px'/>
                                                    </Link>
                                                </div>
                                                <form >
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <label>Username: </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <label>{CustomerInput.username}</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <label>First Name: </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <label>{CustomerInput.fname}</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <label>Last Name: </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <label>{CustomerInput.lname}</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <label>Email: </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <label>{CustomerInput.email}</label>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-4">
                                                            <label>Link: </label>
                                                        </div>
                                                        <div className="col-lg-8">
                                                            <label>{CustomerInput.link}</label>
                                                        </div>
                                                    </div>
                                                </form>
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
    )
}

export default myProfile;