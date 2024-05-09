
import React,{ useState, useEffect } from 'react';
import NavbarUser from "@/components/_App/NavbarUser";
import { getDictionary } from "getDictionary";
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from "axios";
import swal from 'sweetalert';






 
const changePassword = () => {
    const router = useRouter();
    const { locale } = router;
    const { id } = router.query;
    const [translations, setTranslations] = useState(null);


    
    const [isLoading, setIsLoading] = useState(false);
    const [errorConf,setErrorCont] = useState([]);
    const [errorList,setError] = useState([]);  


    const [CustomerInput,  setCustomer] = useState({
        oldPass:'',
        newPass:'',
        confPass:'',
        error_list:[],
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

    const handleInput=(e)=>{
        e.persist(); 
        setCustomer({...CustomerInput,[e.target.name]:e.target.value});        
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        setIsLoading(true);

        const id =localStorage.getItem('id');

        const formData =new FormData();
        formData.append(`oldPass`,CustomerInput.oldPass);
        formData.append(`newPass`,CustomerInput.newPass);
        formData.append(`confPass`,CustomerInput.confPass);

        

        if(CustomerInput.newPass ===CustomerInput.confPass){
            axios.post(`/api/change-password/${id}`,formData ,{headers: {'Content-Type': 'multipart/form-data',}}).then(res=>{
                if(res.data.status ===200){
                    swal('Success',res.data.message,'success');
                    router.push({pathname: '/myProfile'});
                    setIsLoading(false);
                    setError([]);           
                }else if(res.data.status===422){
                    swal('All Fields are mandatory','','error');
                    setIsLoading(false);
                    setError(res.data.errors);
                }else if(res.data.status === 404){
                    swal('Error',res.data.message,'error');
                    setIsLoading(false);
                }else if(res.data.status === 400){
                    swal('Error',res.data.message,'error');
                    setIsLoading(false);
                }
            })  
        }else{
            setErrorCont('password not match wit Confirm password');
            setIsLoading(false);
        }          
    }


    

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
                                            <h2>Home</h2>
                                            <div className="bar"></div>
                                        </div>      
                                        <div className="ptb-80">
                <div className="container">
                    <div className="auth-form">
                        <div className="auth-head">
                            <Link href="/it-startup">
                                <img src="/images/logo.png" style={{width:'50%'}} />
                            </Link>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label className="form-label">Old Password</label>
                                <input type="password" 
                                    className="form-control"
                                    name="oldPass"
                                    onChange={handleInput}
                                />
                                <span className='span'>{errorList.oldPass}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">New Password</label>
                                <input type="password" 
                                    className="form-control"
                                    name="newPass"
                                    onChange={handleInput}
                                />
                                <span className='span'>{errorList.newPass}</span>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" 
                                    className="form-control"
                                    name="confPass"
                                    onChange={handleInput}
                                />
                                <span className='span'>{errorConf}</span>
                            </div>
                            {isLoading ? 
                                (
                                    <div className="containerLoadin" style={{height:'30vh'}}>
                                        <div className="ring"></div>
                                        <div className="ring"></div>
                                        <div className="ring"></div>
                                        <span className="loading">Loading...</span>            
                                    </div>
                                ) : (
                                    <button type="submit" className="btn btn-primary">Change</button>                                
                                )
                            }
                        </form>
                    </div>
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

export default changePassword;