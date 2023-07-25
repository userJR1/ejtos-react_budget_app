import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { dispatch, budget, currency, expenses } = useContext(AppContext);

    const [localBudged, setlocalBudged] = useState(budget);

    function isNumeric(str) {
        if (typeof str != "string") return false 
        return !isNaN(str) &&
               !isNaN(parseFloat(str))
      }

    function handleBudged(e){
        const val = e.target.value;
        if (isNumeric(val))setlocalBudged(val);
    };

    function submitBudged(e){

        let total_expenses = expenses.reduce(
            (total, currentExp) => {
                return total + currentExp.cost
            },0
        );

        console.log(total_expenses);

        if(localBudged <= total_expenses) {
            alert("The budged cannot be below total expenses of "+currency+total_expenses);
            setlocalBudged(budget);
            return;
        }

        if(localBudged > 20000) {
            alert("The budged must be below 20000"+currency);
            setlocalBudged(budget);
            return;
        }
        
        dispatch({
            type: 'SET_BUDGET',
            payload: localBudged,
        });
        
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £
            <input type="number" id="number" step="10" value={localBudged} onChange={handleBudged} onBlur={submitBudged} onClick={submitBudged}/>
            </span>
        </div>
    );
};
export default Budget;