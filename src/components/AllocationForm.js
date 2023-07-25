import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = (props) => {
    const { dispatch,remaining  } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

            if(cost > remaining) {
                alert("The value cannot exceed remaining funds  £"+remaining);
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

    return (
        <div className="input-group mb-3">
            <select className="input-group-text" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
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

            <input
                required='required'
                type='number'
                className="form-control"
                aria-label="cost" aria-describedby="basic-addon1"
                id='cost'
                value={cost}
                placeholder="Cost"
                onChange={(event) => setCost(event.target.value)}>
            </input>

            
        
            <button className="btn btn-primary" onClick={submitEvent}>
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