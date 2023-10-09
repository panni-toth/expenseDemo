import { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);   
  };

  //Filter expenses by year
  const filteredExpenses = props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return(
    <div>
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
  </Card>
  </div>
    );
}

export default Expenses;