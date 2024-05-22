import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const calculateTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => total + item.cost, 0);
};

const determineAlertType = (totalExpenses, budget) => {
    return totalExpenses > budget ? 'alert-danger' : 'alert-success';
};

const Remaining = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [remainingBudget, setRemainingBudget] = useState(budget);
    const totalExpenses = calculateTotalExpenses(expenses);
    const alertType = determineAlertType(totalExpenses, budget);
    const [currencyPrefix, setCurrencyPrefix] = useState(currency);


    useEffect(() => {
        setRemainingBudget(budget);
    }, [budget]);

    useEffect(() => {
        setRemainingBudget(budget - totalExpenses);
    }, [expenses, budget, totalExpenses]);

    useEffect(()  =>{
        setCurrencyPrefix(currency);
    },  [currency]);

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currencyPrefix}{remainingBudget}</span>
        </div>
    );
};

export default Remaining;
