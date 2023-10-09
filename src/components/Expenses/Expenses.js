import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');
  
  let filteredInfoText = "2019, 2021, 2022 and 2023"; 

  if (filteredYear === '2019') {
      filteredInfoText = '2020, 2021, 2022 and 2023'
    } else if (filteredYear === '2023') {
      filteredInfoText = '2019, 2020, 2021 and 2022'
    } else if (filteredYear === '2021') {
      filteredInfoText = '2019, 2020, 2022 and 2023'
    } else if (filteredYear === '2022') {
      filteredInfoText = '2019, 2020, 2021 and 2023'
    } else {
        filteredInfoText = ''
      
    }

  
    const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);   
  };

  //Filter expenses by year
  const filteredExpenses = props.item.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
  
  return(
    <div>
      <p>Data for years {filteredInfoText} is hidden</p>
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map(expense => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>))}
  </Card>
  </div>
    );
}

export default Expenses;