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
        const totalAllocatedCost = calculateTotalExpenses(expenses); // Assuming expenses are available in the context
    
        if (!isNaN(inputValue)) {
            if (inputValue <= 20000) {
                if (inputValue >= totalAllocatedCost) {
                    // Update the budget value if it's within the limit and not less than total allocated cost
                    setNewBudget(inputValue);
                    setError(''); // Clear any previous error
                } else {
                    // Show an alert informing the user that budget cannot be reduced below the total allocated cost
                    alert('The budget cannot be reduced below the total allocated cost.');
    
                    // Reset the input field to the current budget value
                    setNewBudget(budget);
                }
            } else {
                // Show an alert informing the user that the budget must not exceed the maximum limit of 20,000
                alert('The budget must not exceed the maximum limit of 20,000.');
    
                // Reset the input field to the current budget value
                setNewBudget(budget);
            }
        } else {
            // Show an alert informing the user that the entered value is not a valid number
            alert('Please enter a valid number for the budget.');
    
            // Reset the input field to the current budget value
            setNewBudget(budget);
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