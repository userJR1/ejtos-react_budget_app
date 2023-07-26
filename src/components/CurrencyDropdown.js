import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 


const Currency = () => {

    const { currency, dispatch } = useContext(AppContext);
    const currencies = [
        {'id': '$', 'description': '$ Dollar'},
        {'id': '£', 'description': '£ Pound'}, 
        {'id': '€', 'description': '€ Euro'}, 
        {'id': '₹', 'description': '₹ Rupee'},
    ];

    function submitCurrency(e){
        const currency = e.target.getAttribute("value");
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }

    return(
        <div className="alert alert-secondary">
        <div className="dropdown greenSelect">
            <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Currency ({currencies.filter(c => c.id===currency)[0].description})
            </button>
            <ul className="dropdown-menu">
            {currencies.map(cur => (
                <li key={cur.id}><a className={"dropdown-item"+(currency===cur.id ? " active":"")} href="#" value={cur.id} onClick={submitCurrency}>{cur.description}</a></li>
            )   
            )}
            </ul>
        </div>
        </div>
    );
};

export default Currency;