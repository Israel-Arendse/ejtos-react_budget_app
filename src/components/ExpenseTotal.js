import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const calculateTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => total + item.cost, 0);
};


const ExpenseTotal = () => {
    const { expenses, currency } = useContext(AppContext);
    const totalExpenses = calculateTotalExpenses(expenses);
    
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{totalExpenses}</span>
        </div>
    );
};

export default ExpenseTotal;
