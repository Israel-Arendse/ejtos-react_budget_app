import React from 'react';
import './GlobalCurrencyDropdown.css'

const GlobalCurrency = ({ onCurrencyChange }) => {
    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        onCurrencyChange(selectedCurrency);
        // Change currency prefix
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
           <div className='me-2'></div>
            <label htmlFor="currency-select">Currency: </label>
            <select
                id="currency-select"
                onChange={handleCurrencyChange}
                className='currency-select'
                >
            
                <option value="$">(£ Pound)</option>
                <option value="€">(€ Euro)</option>
                <option value="£">($ Dollar)</option>
                <option value="₹">(₹ Rupee)</option>
                {/* Add more currency options as needed */}
            </select>
        </div>
    );
};

export default GlobalCurrency;