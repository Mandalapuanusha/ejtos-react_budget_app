
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        if(event.target.value > 20000){
            alert('Budget value cannot exceed '+ currency +'20000');
            return;     
        }
        else if(event.target.value < totalExpenses) {
            alert("You cannot reduce budget value lower than spending");
            return;
        }        
        else { 
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
        });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;