import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 


const Currency = () => {

    const { currency } = useContext(AppContext);

    function submitCurrency(e){
        console.log(e);
    }

    return(
        <div className='alert alert-success'>
            <select className="input-group-text" id="inputCurrency" required='required' value="TEST" onChange={(event) => submitCurrency(event.target.value)}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;