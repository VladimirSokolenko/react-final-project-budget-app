import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { budget } = useContext(AppContext);
    // const { totalExpence } = useContext(AppContext);

    const { dispatch, budget, expenses } = useContext(AppContext);


    // const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);
    // const { newBudget } = useContext(AppContext);
    // const [budget, setNewBudget] = useState(newBudget);
    const handleBudgetChange = (event) => {

        // if(newBudget < cost) {
        //     alert("The value cannot exceed remaining funds  £"+remaining);
        //     setCost("");
        //     return;
        // }

        
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
        console.log("set_budget " + budget + ", " + totalExpenses)
        // alert("The new budget:  £" + newBudget);
        if (newBudget < totalExpenses) {
            setNewBudget(budget);
            alert("You cannot reduce the budget value lower than the spendings!"); 
        }
        else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    
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