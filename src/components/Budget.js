import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { budget } = useContext(AppContext);

    const { dispatch, budget } = useContext(AppContext);

    const [newBudget, setNewBudget] = useState(budget);
    // const { newBudget } = useContext(AppContext);
    // const [budget, setNewBudget] = useState(newBudget);
    const handleBudgetChange = (event) => {

        // if(newBudget < cost) {
        //     alert("The value cannot exceed remaining funds  £"+remaining);
        //     setCost("");
        //     return;
        // }

        setNewBudget(event.target.value);
        // if(cost > remaining) {
        //     alert("The value cannot exceed remaining funds  £"+remaining);
        //     setCost("");
        //     return;
        // }
        // const expense = {
        // name: name,
        // cost: parseInt(cost),
        // };

        console.log("The new budget:  £" + newBudget);
        // alert("The new budget:  £" + newBudget);

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    
    }
    return (
    <div className='alert alert-secondary'>
        {/* <span>Budget: £{budget}</span> */}
        <span>Budget: £</span>
        <input type="number" step="10" onInput={handleBudgetChange} onClick={handleBudgetChange} value={newBudget} ></input>
    </div>
        );
    };
export default Budget;