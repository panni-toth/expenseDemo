import "./NewExpense.css";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';


const NewExpense = (props) => {
   
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);
        console.log("Data received in saveExpenseDataHandler:", enteredExpenseData);

    };

    
   return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense