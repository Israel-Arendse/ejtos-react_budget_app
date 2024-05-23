//Budget
import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import calculateTotalExpenses from './ExpenseTotal';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState('');
    const [currencyPrefix, setCurrencyPrefix] = useState(currency);

    const handleBudgetChange = (event) => {
        const inputValue = parseFloat(event.target.value);
        const totalAllocatedCost = calculateTotalExpenses(expenses);
    
        if (!isNaN(inputValue)) {
            if (inputValue <= 20000) {
                if (inputValue >= totalAllocatedCost) {
                    setNewBudget(inputValue);
                    setError(''); // Clear any previous error
                } else {
                    setError('The budget cannot be reduced below the total allocated cost.');
                }
            } else {
                setError('The budget must not exceed the maximum limit of 20,000.');
            }
        } else {
            setError('Please enter a valid number for the budget.');
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
