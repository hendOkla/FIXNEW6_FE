import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as Icon from 'react-feather';
import swal from 'sweetalert';
import axios from 'axios';

import ReCAPTCHA from 'react-google-recaptcha';
import { useLocation } from 'react-router-dom';






export default function ServicesPay() {
  const router = useRouter();
  const { query } = useRouter();
  const [email, setEmail] = useState('');

  const sessionId = decodeURIComponent(query.session_id);
  const showStatus = decodeURIComponent(query.status);

  const [isHuman, setIsHuman] = useState(false);

  const handleRecaptchaChange = (value) => {
    setIsHuman(!!value);
  };


  const handleButtonClick = async (e, value) => {
    e.preventDefault();

    if (isHuman){ 

      localStorage.setItem('amount',value);
      if(value=="299"){
        localStorage.setItem('plan',"Standard");
      }else{
        localStorage.setItem('plan',"Pro");
      }

      const data = {
        CustomerName:localStorage.getItem('username'),
        InvoiceValue:value,
        DisplayCurrencyIso: 'USD',
        CustomerEmail: localStorage.getItem('email')
      }

      axios.get(`/api/create`, { params: data }).then(res=>{

        const invoiceURL = res.data.Data.invoiceURL;
        
        window.location.href = res.data.Data.invoiceURL;
      });

    } else {
      alert('Please verify that you are a human');
    }

  };
    
  
    


  useEffect(() => {
    const username = localStorage.getItem('username');
    const link = localStorage.getItem('link');
    const storedEmail = localStorage.getItem('email');
    const attendedBy = localStorage.getItem('attendedBy');      
    const password = localStorage.getItem('password');  
    const sendEmail = localStorage.getItem('email');

    const amount= localStorage.getItem('amount');
    const plan = localStorage.getItem('plan');

    if (storedEmail) {
      setEmail(storedEmail);
    }  
    
    if(!username){
      router.push('/sign-up/');
    }else{
      
      const query = new URLSearchParams(router.asPath.split('?')[1]);

      
      
      


      if (query.get('type')==='success') {
        try {
          const username = localStorage.getItem('username');
          const numMonth = localStorage.getItem('radioValue');         

          axios.get(`/api/checkUser/${username}`).then(res=>{
            if(res.data.status === 200){
              const activateData= {
                username:username,
                numMonth: numMonth
              }              
              axios.post(`/api/activateSub`,activateData).then(res=>{
                if(res.data.status==200){  
                  router.push({pathname: '/login'});
                }else{
                  router.push({pathname: '/renew'});
                }                
              });
            }else{
              const data = {
                username: username,
                attendedBy: attendedBy,
                amount: amount,
                paymentPlan: plan,
                email: sendEmail,
                password: password
              };
                  const mailData = {
                username:username,
                email:sendEmail,
                link: link,
                password: password,                  
              }
              axios.post(`/api/payment`,data).then(res=>{
                if(res.data.status==200){                
                  //send mail for user registered
                    fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ mailData }),
                  })
                    .then(response => response.json())
                    .then(data => {
                      if (data.status===200) {
                        axios.post(`/api/updateCustomStatus/${username}`).then(ress=>{
                          if(ress.status ===200){
                                //get user who attended by he
                              axios.get(`/api/getCEmail/${attendedBy}`,data).then(resEmail=>{
                                if(resEmail.data.email){
    
                                  //send mail for user registered
                                  const reMailData = {
                                    username:attendedBy,
                                    email:resEmail.data.email,
                                    newUser:username                                            
                                  }
    
                                  fetch('/api/receive-email', {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ reMailData }),
                                  })
                                    .then(responseMail => responseMail.json())
                                    .then(data => {
                                      if (data.status===200) {  
                                        swal("Success",`Ready to show videos,Please check your mail......`,"success");  
                                        router.push('/'); 
                                      } else {
                                        swal("Error",`an error occurred. If you are sure that the payment has been completed, please submit the issue and our support team will contact you`,"error"); 
                                      }
                                  }); 
                                }
    
                              });
                          }else{
                            swal("Error",res.data.error,"error");
                          }
                        }); 
                      } else {
                        swal("Error",`an error occurred. If you are sure that the payment has been completed, please submit the issue and our support team will contact you`,"error"); 
                      }
                  });  
                }else{
                    swal("Failed",'Something went wrong, please contact support to resolve the issue...',"warning");                    
                } 
              });              
            }
        });          
        } catch (error) {
          swal("Error",`Something went wrong, please contact our support team`,"error"); 
        }          
      }    
      if (query.get('type')==='canceled') {
        router.push({pathname: '/login'});
        swal("Error",`Order canceled -- continue to shop around and checkout when you’re ready.`,"error"); 
      }  
      
    }
  }, [showStatus]);

  return (
    
    <>
      <form>
        <section>
          <input type="email" name="email" value={email} readOnly hidden />
          <div className="bigdata-services-area ptb-80 bg-eef6fd">
            <div className="container">
              <div className="section-title">
                <h2>Our special packages</h2>
                <div className="bar"></div>
                <p>
                  You can choose the package that suits you and enjoy the experience
                  with us
                </p>

              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>6FE Standard</h3>
                    </div>
     {/*                <div className='row'><span className='offer'>SALE</span></div> 
                    <div className='row'><span className='offer'>Valentine's Day</span></div>  */}
                    <div className="price">                      
                      <span>
                        <sup>$</sup>299.00{' '}
                      </span>
                    </div>
{/*                     <div className="row">
                       <span className='price-offer'>299%</span>
                    </div> */}

                    <div className="pricing-features">
                      <ul></ul>
                    </div>
                    <div className="pricing-footer">
                      <button onClick={(e) => handleButtonClick(e,"299")} className="btn btn-primary" type="submit" name="amount" value="299" role="link" >Standard </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-table">
                    <div className="pricing-header">
                      <h3>6FE Pro</h3>
                    </div>
{/*                       <div className='row'><span className='offer'>SALE</span></div> 
                      <div className='row'><span className='offer'>Valentine's Day</span></div>  */}
                    <div className="price">
                      <span>
                        <sup>$</sup>599.00{' '}
                      </span>
                    </div>
{/*                     <div className="row">
                      <span className='price-offer'>599%</span> 
                    </div> */}
                    <div className="pricing-features">
                      <ul></ul>
                    </div>
                    <div className="pricing-footer">
                      <button onClick={(e) => handleButtonClick(e,"599")} className="btn btn-primary" type="submit" name="amount"value ="599" role="link" >Pro</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center-container ">
                <ReCAPTCHA
                  sitekey="6LeNoNsoAAAAAGP9LtPnTn45Ft3A32ytuxdLvCMh"
                  onChange={handleRecaptchaChange}
                /> 
               </div>
            </div>
          </div>
        </section>
      </form>  
    </>
  );
}
