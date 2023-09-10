import { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');
  const [filteredInfoText, setFilteredInfoText] = useState('2019, 2021 and 2022')
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    if (selectedYear === '2019') {
      setFilteredInfoText('2020, 2021 and 2023')
    } else if (selectedYear === '2020') {
      setFilteredInfoText('2019, 2021 and 2023')
    } else if (selectedYear === '2021') {
      setFilteredInfoText('2020, 2021 and 2023')
    } else if (selectedYear === '2022') {
      setFilteredInfoText('2020, 2021 and 2023')
    }
  };
  
  return(
    <div>
      <p>Data for years {filteredInfoText} is hidden</p>
    <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    <ExpenseItem 
    title={props.item[0].title} 
    amount={props.item[0].amount} 
    date={props.item[0].date}
    >

    </ExpenseItem>
    <ExpenseItem 
    title={props.item[1].title} 
    amount={props.item[1].amount} 
    date={props.item[1].date}
    ></ExpenseItem>
    <ExpenseItem 
    title={props.item[2].title} 
    amount={props.item[2].amount} 
    date={props.item[2].date}
    ></ExpenseItem>
    <ExpenseItem 
    title={props.item[3].title} 
    amount={props.item[3].amount} 
    date={props.item[3].date}
    ></ExpenseItem>  
  </Card>
  </div>
    );
}

export default Expenses;