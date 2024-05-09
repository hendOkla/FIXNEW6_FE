import React, { useState, useEffect } from 'react'
import Link from "next/link";
export const Coupon = (props) => {
  const [checked, setChecked] = useState(false);
  const [renewalAmount, setRenewalAmount] = useState();

  useEffect(() => {
    props.signalParent({isValid: true, goto: 0})
    setRenewalAmount(localStorage.getItem('Price'))
  }, [checked])

  const handleCheckbox = (e) => {
    setChecked(e.target.checked)
  }

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
      setActiveTab(index);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="mb-3 col-lg-3">
          <label className="form-label">Coupon</label>
          <input type="text" className="form-control" name="fname" />
        </div>
        <div className="mb-3 col-lg-2">
          <Link href="/login/" className="btn btn-primary check_submit">
            Check
          </Link>
        </div>
      </div>
      <p className="text-center">Payment amount: ${renewalAmount}</p> {/* Center the payment amount text */}
    </div>
  )
}

 
