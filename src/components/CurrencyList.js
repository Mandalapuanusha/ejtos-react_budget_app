
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newcurrency, setCurrency] =  useState(currency);  
    const changeCurrencyHandler = (event)=>{
        setCurrency(newcurrency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
      
    return (
        <div>
             <select className='alert alert-primary' id="Currency" onChange={changeCurrencyHandler}>
             <option defaultValue={'£'} value="£" name="Pound">Currency (£Pound)</option>
            <option value="$" name="Dollar">$ Dollar</option>
            <option value="£" name="Pound">£ Pound</option>
            <option value="€" name="Euro">€ Euro</option>
            <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencyList;