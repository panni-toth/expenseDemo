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
  
  return(
    <div>
      <p>Data for years {filteredInfoText} is hidden</p>
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.item.map(a => <ExpenseItem title={a.title} amount={a.amount} date={a.date}></ExpenseItem>)}
  </Card>
  </div>
    );
}

export default Expenses;