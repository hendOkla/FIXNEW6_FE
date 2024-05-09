import React, { useState, useEffect } from 'react'
import Link from "next/link";
import axios from 'axios';


export const PaymentMethods
= (props) => {
  const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleButtonClick = async (e, value) => {
        e.preventDefault();

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
    }

    


    

    return (
        <div className="tabs-container" style={{width:"100%"}}>
            <div className="tabs">
                <div style={{width:"100%"}} className={`tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>My Fatorah</div>
                <div style={{width:"100%"}} className={`tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>coinbase</div>
            </div>
            <div className="tab-content">
                {activeTab === 0 && 
                    <div className="others-option">
                        <Link to="/login" className="btn btn-primary" href="#" onClick={(e) => handleButtonClick(e, localStorage.getItem('Price'))}>
                            Pay with MyFatoorah
                        </Link>
                    </div>
                }
                {activeTab === 1 && 
                   <div className="others-option">
                        <Link href="/login/" className="btn btn-primary">
                        Pay with coinbase
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
}
