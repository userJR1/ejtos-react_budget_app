import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const { currency } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('0');
    const [action, setAction] = useState('');
    const [inputValid, setinputValid] = useState(true);

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds "+StaticRange.currency+remaining);
                setCost("");
                return;
            }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    const toggleAction = () => {
        if(action === "Reduce") {
            setAction("Add");
        } else {
            setAction("Reduce");
        }
    };

    function isNumeric(str) {
        if (typeof str != "string") return false 
        return !isNaN(str) &&
               !isNaN(parseFloat(str))
      }

    const handleSetCost = (e) => {
        const cost = e.target.value;
        console.log(cost);
        console.log(isNumeric(cost));
        setinputValid(isNumeric(cost));
        setCost(cost);
    };

    return (
        <div className="input-group mb-3 needs-validation">
            <select className="input-group-text" id="inputGroupSelect01" required='required' onChange={(event) => {console.log(event.target.value);setName(event.target.value)}}>
                <option disabled selected value>Department...</option>
                <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value="HR" name="hr">HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
            </select>

            {
            action === 'Reduce' ? 
            <button className="btn btn-outline-danger" onClick={toggleAction}>Reduce</button> : 
            <button className="btn btn-outline-success" onClick={toggleAction}>Add</button>
            }

            <span className="input-group-text" id="basic-addon1">{currency}</span>
            <form className="form-floating">
                <input
                    required='required'
                    className={"form-control "+ (inputValid ? "is-valid":"is-invalid")}
                    aria-label="cost" aria-describedby="basic-addon1"
                    id='cost'
                    value={cost}
                    placeholder="Cost"
                    onChange={handleSetCost}>
                </input>
                <label for="cost">
                    {inputValid ? "Cost": "Cost must be numeric!"}
                </label>
            </form>
                
            
            <button className="btn btn-primary" disabled={!inputValid} onClick={submitEvent}>
            {
            action === 'Reduce' ? 
            "Reduce Expenses":
            "Add Expenses"
            }
            </button>
        </div>
    );
};

export default AllocationForm;