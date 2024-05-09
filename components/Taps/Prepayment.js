import React, { useState, useEffect } from 'react'

let state = {
  firstName: '',  
  lastName: ''
}
let firstNameIsInvalid = true

const setFirstName = s => {
  state.firstName = s
  firstNameIsInvalid = state.firstName.length === 0
}
const setLastName = s => state.lastName = s

export const Prepayment = (props) => {
  const [stepVisited, setStepVisited] = useState(0)
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedPrice, setSelectedPrice] = useState();

  

  const handleRadioChange = (e) => {
    setSelectedValue(e.target.value);
    setSelectedPrice(parseFloat(e.target.dataset.price));
    localStorage.setItem('Price',e.target.dataset.price);
    localStorage.setItem('radioValue',e.target.value);
  };


  useEffect(() => {
    const storedRadioValue = localStorage.getItem('radioValue');
    if(stepVisited === 0) {
      props.signalParent({isValid: state.firstName.length > 0, goto: 0})
    }

    if (!storedRadioValue) {
      setSelectedValue('1');
      setSelectedPrice(49.99)
      localStorage.setItem('Price',49.99);
      localStorage.setItem('radioValue',1);

    } else {
      setSelectedValue(localStorage.getItem('radioValue'));
      setSelectedPrice(localStorage.getItem('Price'));

    }
    
  }, [stepVisited])


  


  


  

  
    
  return (
    <div className='container u-full-width container_form'>              
      <div className='row'>
      <div className='six columns'>
        Do you want to prepay?  
        <div className="columns">
          <input
              type="radio"
              id="1month"
              value="1"
              data-price="49.99"
              checked={selectedValue === '1'}
              onChange={handleRadioChange}
          />
          <label htmlFor="1month">No prepay</label>                    
        </div>                
        <div className="columns">
          <input
              type="radio"
              id="2month"
              value="2"
              data-price="149.97"
              checked={selectedValue === '2'}
              onChange={handleRadioChange}
          />
          <label htmlFor="2month">Prepay for an additional 3 months for $149.97</label>                    
        </div>
        <div className="columns">
          <input
              type="radio"
              id="6month"
              value="6"
              data-price="299.94"
              checked={selectedValue === '6'}
              onChange={handleRadioChange}
          />
          <label htmlFor="6month">Prepay for an additional 6 months for $299.94</label>                    
        </div>
        <div className="columns">
          <input
              type="radio"
              id="12month"
              value="12"
              data-price="599.88"
              checked={selectedValue === '12'}
              onChange={handleRadioChange}
          />
          <label htmlFor="12month">Prepay for an additional 12 months for $599.88</label>                    
        </div>
        
        <p>Payment amount: ${selectedPrice}</p>
      </div> 
      </div>
    </div>
  )
}
