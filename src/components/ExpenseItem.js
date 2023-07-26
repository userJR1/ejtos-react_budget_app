import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import {BsPlusCircleFill} from "react-icons/bs";
import {AiFillMinusCircle} from "react-icons/ai";
import { AppContext } from '../context/AppContext';
import { IconContext } from "react-icons";

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td>
            <IconContext.Provider value={{ color: 'green', size: '1.5em' }}>
                <BsPlusCircleFill onClick={()=> increaseAllocation(props.name)}></BsPlusCircleFill>
            </IconContext.Provider>
        </td>
        <td>
            <IconContext.Provider value={{ color: '#af2419', size: '1.5em' }}>
                <AiFillMinusCircle size='1.5em' onClick={()=> decreaseAllocation(props.name)}></AiFillMinusCircle>
            </IconContext.Provider>
        </td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;