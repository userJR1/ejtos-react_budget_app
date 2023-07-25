import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 


const Currency = () => {

    const { currency } = useContext(AppContext);

    function submitCurrency(e){
        console.log(e);
    }

    return(
        <div>
            <select className="input-group-text" id="inputCurrency" required='required' onChange={(event) => submitCurrency(event.target.value)}>
                <option selected value="Dollar">Dollar</option>
                <option value="Pound">Pound</option>
            </select>
        </div>
    );
};

export default Currency;