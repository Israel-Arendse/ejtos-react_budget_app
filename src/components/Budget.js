//Budget
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');
    const [currencyPrefix, setCurrencyPrefix] = useState(currency);

    const handleBudgetChange = (event) => {
        const inputValue = parseFloat(event.target.value);

        if (!isNaN(inputValue) && inputValue <= 20000) {
            setNewBudget(inputValue);
            setError(''); // Clear any previous error
        } else {
            // Show an alert here (you can customize the styling)
            alert('The budget must be 20,000 or less');
        }
    };

    useEffect(() => {
        setCurrencyPrefix(currency);
    }, [currency]);

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <div className='me-2'>Budget: {currencyPrefix}</div> {/* Render prefix dynamically */}
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
            {error && <div className="text-danger">{error}</div>}
        </div>
    );
};

export default Budget;