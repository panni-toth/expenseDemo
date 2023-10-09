import react, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';


const NewExpense = (props) => {
   
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        setShowForm(false);

    };

    const [showForm, setShowForm] = useState(false);

    // Showing New Expense Form when 'Add New Expense' is clicked
    const handleShowExpenseForm = () => {
        setShowForm(true);
    };
    // Hiding the form when 'Cancel' is clicked
    const handleHideExpenseForm = () => {
        setShowForm(false);
    };

    
   return <div className='new-expense'>
        {!showForm && <button onClick={handleShowExpenseForm}>Add New Expense</button>}
        {showForm && <ExpenseForm 
        onSaveExpenseData={saveExpenseDataHandler} 
        onCancel={handleHideExpenseForm}/>}
    </div>
};

export default NewExpense