// GlobalCurrency.js
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const GlobalCurrency = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
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
                <option value="£">(£ Pound)</option>
                <option value="€">(€ Euro)</option>
                <option value="$">($ Dollar)</option>
                <option value="₹">(₹ Rupee)</option>
                {/* Add more currency options as needed */}
            </select>
        </div>
    );
};

export default GlobalCurrency;
