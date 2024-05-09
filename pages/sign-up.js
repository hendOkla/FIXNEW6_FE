import React,{ useState, useEffect } from 'react';
import PageBanner from '@/components/Common/PageBanner';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import { useRouter } from 'next/router';
import swal from 'sweetalert';
import Link from 'next/link';
import axios from 'axios';
import { getDictionary } from "getDictionary";

 
const SignUp = () => {
    const router = useRouter();
    const { locale } = router;
    const { pathname, query } = router;
    const [translations, setTranslations] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const [errorConf,setErrorCont] = useState([]);
    const [registerInput,setRegister]=useState({
        username:'',
        fname:'',
        lname:'',
        email:'',
        password:'',
        error_list:[]
    })
    const data ={
        username:registerInput.username,
        fname :registerInput.fname,
        lname :registerInput.lname,
        email :registerInput.email,
        password :registerInput.password,
    }
    const handleInput=(e)=>{
        e.persist(); 
        setRegister({...registerInput,[e.target.name]:e.target.value});
        
    }
    const Register= async(e)=>{
        e.preventDefault();
        setIsLoading(true);
        setErrorCont(''); 
          //CHECK IF PASSWORD EQUAL CONFIRM PASSWORD  
        if(registerInput.password === registerInput.confPassword){
            axios.get(`/sanctum/csrf-cookie`).then(response=>{
                axios.post(`/api/register-customer`,data).then(res=>{
                    if(res.data.status===200){
                        console.log(res.data.message);                    
                        localStorage.setItem('username',res.data.username); 
                        localStorage.setItem('email',registerInput.email); 
                        localStorage.setItem('link',res.data.link);
                        localStorage.setItem('password',registerInput.password); 
                        setRegister({
                            username:'',
                            fname:'',
                            lname:'',
                            email:'',
                            password:'',
                            error_list:[]
                        }); 
                        setErrorCont(''); 
                        router.push('/pay');
                    }else{
                        setRegister({...registerInput,error_list:res.data.validation_errors})    
                        setIsLoading(false);            
                    }
                })                
            })
        }else{
            setErrorCont('password not match with Confirm password');
            setIsLoading(false);
        }        
    }
    const attendedBy = router.query.attendedBy;
    useEffect(()=>{
        if ( typeof attendedBy !== '') {            
            console.log(attendedBy);
            localStorage.setItem('attendedBy', attendedBy);
        }
        //for translation 
        async function fetchTranslations() {
            const translations = await getDictionary(locale);
            setTranslations(translations);
        }
        fetchTranslations();
    },[attendedBy, locale]);


    return (
        <>
            <Navbar />
            <PageBanner pageTitle={translations ? (translations.form.signUp) : ('')} />
            <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" style={{width:'50%'}} />
                            </Link>
                            <p>{translations ? (translations.form.createAccount) : ('')}</p>
                        </div>
                        <form onSubmit={Register}>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="username" 
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.username}</span>
                                </div>                                                               
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <label className="form-label">{translations ? (translations.form.email) : ('')}</label>
                                    <input type="email" 
                                        className="form-control" 
                                        name="email" 
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.email}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">{translations ? (translations.form.fname) : ('')}</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="fname" 
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.fname}</span>
                                </div>
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">{translations ? (translations.form.lname) : ('')}</label>
                                    <input type="text" 
                                        className="form-control" 
                                        name="lname"
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.lname}</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">{translations ? (translations.form.pass) : ('')}</label>
                                    <input type="password" 
                                        className="form-control" 
                                        name="password"
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{registerInput.error_list.password}</span>
                                </div> 
                                <div className="mb-3 col-lg-6">
                                    <label className="form-label">{translations ? (translations.form.confpass) : ('')}</label>
                                    <input type="password"
                                        className="form-control" 
                                        name="confPassword"
                                        onChange={handleInput}
                                    />
                                    <span className='span span-reg'>{errorConf}</span>
                                </div>
                            </div>

                            {isLoading ? 
                                (
                                    <div class="containerLoadin" style={{height:'30vh'}}>
                                        <div class="ring"></div>
                                        <div class="ring"></div>
                                        <div class="ring"></div>
                                        <span class="loading">Loading...</span>            
                                    </div>
                                ) : (
                                    <button type="submit" className="btn btn-primary">{translations ? (translations.form.signUp) : ('')}</button>                                
                                )
                            }
                        </form>
                        <div className="foot">
                            <p>{translations ? (translations.form.haveAccount) : ('')} <Link href="/login">{translations ? (translations.form.login) : ('')}</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignUp;